import { useState, useEffect, useRef, useCallback } from 'react'
import Head from 'next/head'
import { motion, useReducedMotion, useMotionValue, useTransform, useInView, animate } from 'framer-motion'
import styles from '@/styles/Home.module.css'

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: 13, suffix: '+', label: 'Years shipping frontends' },
  { value: 50, suffix: '+', label: 'Production projects delivered' },
  { value: 3,  suffix: '',  label: 'Design systems architected' },
  { value: 95, suffix: '+', label: 'Avg. Lighthouse score' }
]

const projects = [
  {
    id: 'dsm',
    label: 'Design System · LitElement',
    title: 'Framework-Agnostic Design System',
    body: 'Led a team of five developers in crafting a design system built on LitElement — a framework-agnostic technology. Comprises expertly designed, highly adaptable UI components that streamline development and ensure consistency across products, all unified in a single repository with full Docusaurus documentation.',
    tags: ['LitElement', 'Web Components', 'Polymer', 'React', 'Docusaurus'],
    outcomes: [
      { value: '5',   label: 'Engineers led' },
      { value: '1',   label: 'Unified component repo' }
    ],
    role: 'Tech Lead',
    image: 'https://numankhan4.github.io/numanulhaq/static/media/project-dsm.5480adb635b53275e95a.png',
    featured: true
  },
  {
    id: 'rms',
    label: 'Resource Management · Angular',
    title: 'Resource Management System',
    body: 'Guided a team of two developers in building a versatile Angular-based solution to simplify resource management. Enables seamless sign-in, hour logging, leave requests, and remote work facilitation — a user-friendly interface that streamlines workforce operations end to end.',
    tags: ['Angular', 'TypeScript', 'Highcharts', 'Angular Material', 'Custom Components'],
    outcomes: [
      { value: '4',   label: 'Core HR modules' },
      { value: '2',   label: 'Developers led' }
    ],
    role: 'Lead Developer',
    image: 'https://numankhan4.github.io/numanulhaq/static/media/project-rms.a9bc28bc339345959fb8.png',
    featured: false
  },
  {
    id: 'cintel',
    label: 'Business Intelligence · Angular',
    title: 'C-Intel Data Visualization Platform',
    body: 'Contributed as senior developer to an innovative BI project delivering interactive data visualizations. Empowers users to explore, drill down, and discover insights within complex datasets — unlocking the full potential of business intelligence through intuitive reporting.',
    tags: ['Angular', 'TypeScript', 'SpagoBI', 'Highcharts', 'Angular Dragula'],
    outcomes: [
      { value: '5+',  label: 'Custom widget types' },
      { value: 'BI',  label: 'Analytics platform' }
    ],
    role: 'Senior Frontend Developer',
    image: 'https://numankhan4.github.io/numanulhaq/static/media/project-cintel.a9f826206567f23b5a2e.png',
    featured: false
  }
]

const moreProjects = [
  {
    id: 'cof-contests',
    label: 'Dashboard · Angular + Firebase',
    title: 'COF Contests Academic Platform',
    body: 'Collaborated on an Angular dashboard tailored for academic bowl competitions. Empowers students with core curriculum and organisation-specific content, challenging them with rigorous questions while promoting client brand identity.',
    tags: ['Angular', 'TypeScript', 'Firebase', 'Dynamic Charts', 'Data Tables', 'Custom Components'],
    role: 'Frontend Developer',
    image: 'https://numankhan4.github.io/numanulhaq/static/media/cof-dashboard.c8c4ac346190162e09ae.png',
    link: 'https://cof-contests.web.app/login'
  },
  {
    id: 'cof-academic',
    label: 'Marketing Site · Angular',
    title: 'COF Academic Bowl Website',
    body: 'Developed a full marketing website for the COF Contests dashboard app. Provides comprehensive resources about the project and academic bowl competitions, built with Angular and the Dashcore theme with complete registration and sign-in flows.',
    tags: ['Angular', 'TypeScript', 'API Integration', 'Authentication', 'Responsive Styling'],
    role: 'Frontend Developer',
    image: 'https://numankhan4.github.io/numanulhaq/static/media/cof-academic.eee9b4f4888da2ffcbce.png',
    link: 'https://cof-academic-bowl.web.app/'
  },
  {
    id: 'real-estate-wp',
    label: 'WordPress Theme · ThemeForest',
    title: 'Real Estate WordPress Theme',
    body: 'Crafted a production-ready Real Estate WordPress theme from scratch. Pixel-perfect, W3C-validated, and fully responsive — designed for the ThemeForest marketplace using HTML, CSS, JavaScript, and Bootstrap.',
    tags: ['WordPress', 'Bootstrap', 'HTML5', 'CSS3', 'jQuery', 'SEO'],
    role: 'Senior Frontend Developer',
    image: 'https://numankhan4.github.io/numanulhaq/static/media/homeVillas.8af45e3abeab070a40fd.png',
    link: 'https://homevillas.chimpgroup.com/'
  },
  {
    id: 'restaurant-wp',
    label: 'WordPress Theme · ThemeForest',
    title: 'Restaurant Directory WordPress Theme',
    body: 'Led development of a comprehensive Restaurant Directory WordPress theme. Pixel-perfect, W3C-validated, and fully responsive — leveraging HTML, CSS, JavaScript, and Bootstrap for ThemeForest publication.',
    tags: ['WordPress', 'Bootstrap', 'HTML5', 'CSS3', 'jQuery', 'SEO'],
    role: 'Senior Frontend Developer',
    image: 'https://numankhan4.github.io/numanulhaq/static/media/foodbakery.264d380afcc26407adf5.png',
    link: 'https://foodbakery.chimpgroup.com/'
  }
]

const principles = [
  {
    num: '01',
    title: 'Architecture before syntax',
    body: 'System boundaries, data flow, and component contracts are resolved before any code is written. Redesigning a system is always more expensive than thinking it through first.'
  },
  {
    num: '02',
    title: 'Tokens are the source of truth',
    body: 'Design decisions belong in the token layer — not scattered across component files. A token-first system stays visually consistent regardless of team size or velocity.'
  },
  {
    num: '03',
    title: 'Accessible by default',
    body: 'Semantic markup, keyboard navigation, and readable contrast are load-bearing constraints. Built in from the first iteration — not retrofitted at release.'
  },
  {
    num: '04',
    title: 'Performance is product quality',
    body: 'Bundle size, rendering strategy, and Core Web Vitals have direct business impact. Every millisecond is a conversion, retention, or SEO decision.'
  }
]

const stack = [
  {
    label: 'Frontend Core',
    items: ['React', 'Angular', 'Next.js', 'TypeScript']
  },
  {
    label: 'UI Systems',
    items: ['shadcn/ui', 'Storybook', 'Radix UI', 'Lit / LitElement']
  },
  {
    label: 'Backend & CMS',
    items: ['Node.js', 'Laravel', 'WordPress', 'Headless CMS']
  },
  {
    label: 'DX & Infra',
    items: ['Vercel', 'Git / CI', 'Figma', 'Performance Auditing']
  }
]

const workStyle = [
  'Clean, structured, maintainable code — always.',
  'Honest estimates and clear communication.',
  'Attention to UI details most engineers miss.',
  'Long-term architecture thinking, not quick hacks.',
  'Transparent process with early feedback loops.'
]

const bestFit = [
  'VC-funded SaaS startups',
  'US and European product agencies',
  'Founders who care deeply about UI quality',
  'Engineering teams scaling from prototype to production',
  'CTOs who want architecture right from the start'
]

const additionalExperience = [
  'WordPress theme development and customization',
  'PSD / Figma to HTML, React, and WordPress',
  'HTML email templates with MJML',
  'Web components with Lit and LitElement',
  'Angular frontend projects',
  'Firebase and REST API integrations',
  'Shopify theme development with Liquid',
  'Page speed optimization and Lighthouse auditing',
  'Accessibility audits and WCAG implementation',
  'Visual regression and component testing'
]

// ─── Logo Mark ──────────────────────────────────────────────────────────────

function LogoMark({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="currentColor"
    >
      <rect x="6" y="0" width="4" height="48" />
      <polygon points="6,0 10,0 26,48 22,48" />
      <rect x="22" y="0" width="4" height="48" />
      <rect x="26" y="22" width="16" height="4" />
      <rect x="38" y="0" width="4" height="48" />
    </svg>
  )
}

// ─── AnimatedCounter ──────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))
  const prefersReducedMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, amount: 0.8 })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, value, { duration: 1.6, ease: 'easeOut' })
    return controls.stop
  }, [isInView, motionValue, value])

  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={styles.statValue}>
        {value}{suffix}
      </span>
    )
  }

  return (
    <span ref={ref} className={styles.statValue}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

// ─── Reveal animation helper ──────────────────────────────────────────────────

function getRevealProps(prefersReducedMotion, delay = 0) {
  if (prefersReducedMotion) return {}
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.62, delay, ease: [0.19, 1, 0.22, 1] }
  }
}

// ─── Hero heading line variants ───────────────────────────────────────────────

const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } }
}

const headingLine = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: [0.19, 1, 0.22, 1] }
  }
}

// ─── Browser mockup ───────────────────────────────────────────────────────────

function ProjectMockup() {
  return (
    <div className={styles.projectMockup} aria-hidden="true">
      <div className={styles.mockupBar}>
        <span className={styles.mockupDot} />
        <span className={styles.mockupDot} />
        <span className={styles.mockupDot} />
      </div>
      <div className={styles.mockupContent}>
        <div className={`${styles.mockupLine} ${styles.wide}`} />
        <div className={`${styles.mockupLine} ${styles.mid}`} />
        <div className={`${styles.mockupLine} ${styles.lit}`} />
        <div className={`${styles.mockupLine} ${styles.wide}`} />
        <div className={`${styles.mockupLine} ${styles.short}`} />
        <div className={`${styles.mockupLine} ${styles.mid}`} />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 })
  const prefersReducedMotion = useReducedMotion()
  const appBasePath = process.env.NODE_ENV === 'production' ? '/numanulhaq' : ''

  const handleMouseMove = useCallback((e) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove, prefersReducedMotion])

  const featured = projects.find((p) => p.featured)
  const secondary = projects.filter((p) => !p.featured)

  return (
    <>
      <Head>
        <title>Numan Ul Haq — Frontend Architect & UI Systems Engineer</title>
        <meta
          name="description"
          content="13+ years building production-grade React, Next.js, and TypeScript systems. Frontend architecture, design systems, and pixel-perfect implementation for SaaS startups and agencies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Numan Ul Haq — Frontend Architect & UI Systems Engineer" />
        <meta
          property="og:description"
          content="Serious frontend work for serious products. 13 years shipping production-grade interfaces for startups, SaaS teams, and product agencies."
        />
        <link rel="icon" href={`${appBasePath}/images/svgs/logo-icon.svg`} type="image/svg+xml" />
        <link rel="shortcut icon" href={`${appBasePath}/images/svgs/logo-icon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${appBasePath}/images/svgs/logo-icon.svg`} />
      </Head>

      <div className={styles.wrapper}>
        {/* Architectural grid overlay */}
        <div className={styles.gridBg} aria-hidden="true" />

        {/* Cursor spotlight */}
        {!prefersReducedMotion && (
          <div
            className={styles.spotlight}
            style={{
              background: `radial-gradient(520px circle at ${mouse.x}px ${mouse.y}px, rgba(99, 102, 241, 0.07), transparent 50%)`
            }}
            aria-hidden="true"
          />
        )}

        <main className={styles.main}>
          {/* ── NAVIGATION ───────────────────────────── */}
          <header className={styles.navWrap}>
            <nav className={styles.nav} aria-label="Primary navigation">
              <a href="#" className={styles.brand} aria-label="Numan Ul Haq — Home">
                <LogoMark size={24} />
              </a>
              <div className={styles.navCenter} role="list">
                <a href="#work" role="listitem">Work</a>
                <a href="#stack" role="listitem">Stack</a>
                <a href="#process" role="listitem">Process</a>
              </div>
              <a href="#contact" className={styles.navCta}>
                Get in touch
              </a>
            </nav>
          </header>

          {/* ── HERO ─────────────────────────────────── */}
          <section id="hero" className={styles.hero} aria-label="Introduction">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
            >
              <p className={styles.heroName}>Numan Ul Haq</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className={styles.heroKicker}
            >
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Available for contracts · Frontend Architecture</span>
            </motion.div>

            <motion.h1
              className={styles.heroHeading}
              variants={prefersReducedMotion ? {} : headingContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                style={{ display: 'block' }}
                variants={prefersReducedMotion ? {} : headingLine}
              >
                Serious frontend work
              </motion.span>
              <motion.span
                style={{ display: 'block' }}
                className={styles.heroAccent}
                variants={prefersReducedMotion ? {} : headingLine}
              >
                for serious products.
              </motion.span>
            </motion.h1>

            <motion.p
              className={styles.heroBody}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 18 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: [0.19, 1, 0.22, 1] }}
            >
              13 years shipping production-grade React, Angular, Next.js, and TypeScript systems. I
              close the gap between design ambition and engineering reality — from enterprise design
              systems and data dashboards to headless platforms built to last.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.76, ease: [0.19, 1, 0.22, 1] }}
            >
              <a href="#work" className={styles.primaryBtn}>
                View selected work
              </a>
              <a href="mailto:numankhaan4@gmail.com" className={styles.ghostBtn}>
                numankhaan4@gmail.com
              </a>
              <a
                href="https://drive.google.com/file/d/1vGiWiTHESVfH9IEYBKtkUggoIP623Xbd/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.ghostBtn}
              >
                View r&eacute;sum&eacute; {'\u2197'}
              </a>
            </motion.div>
          </section>

          {/* ── STATS ────────────────────────────────── */}
          <motion.div
            className={styles.statsWrap}
            {...getRevealProps(prefersReducedMotion, 0.05)}
          >
            <div className={styles.stats} aria-label="Career highlights">
              {stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                  <p className={styles.statLabel}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className={styles.divider} aria-hidden="true" />

          {/* ── SELECTED WORK ────────────────────────── */}
          <motion.section
            id="work"
            className={styles.section}
            aria-label="Selected work"
            {...getRevealProps(prefersReducedMotion, 0)}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum} aria-hidden="true">02</span>
              <h2 className={styles.sectionTitle}>Selected work</h2>
            </div>

            <div className={styles.projectGrid}>
              {/* Featured project */}
              {featured && (
                <article className={styles.projectFeatured}>
                  <div>
                    <p className={styles.projectRole}>{featured.role}</p>
                    <p className={styles.projectLabel}>{featured.label}</p>
                    <h3 className={styles.projectTitle}>{featured.title}</h3>
                    <p className={styles.projectBody}>{featured.body}</p>
                    <div className={styles.projectOutcomes}>
                      {featured.outcomes.map((o) => (
                        <div key={o.label} className={styles.outcomeTag}>
                          <span className={styles.outcomeValue}>{o.value}</span>
                          <span className={styles.outcomeMetric}>{o.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.projectTags}>
                      {featured.tags.map((t) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                    {featured.link && (
                      <a
                        href={featured.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.projectLinkBtn}
                      >
                        View live {'\u2197'}
                      </a>
                    )}
                  </div>
                  <ProjectMockup image={featured.image} />
                </article>
              )}

              {/* Secondary projects */}
              <div className={styles.projectSecondaryGrid}>
                {secondary.map((project) => (
                  <article key={project.id} className={styles.projectCard}>
                    <p className={styles.projectRole}>{project.role}</p>
                    <p className={styles.projectLabel}>{project.label}</p>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectBody}>{project.body}</p>
                    <div className={styles.projectOutcomes}>
                      {project.outcomes.map((o) => (
                        <div key={o.label} className={styles.outcomeTag}>
                          <span className={styles.outcomeValue}>{o.value}</span>
                          <span className={styles.outcomeMetric}>{o.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.projectTags}>
                      {project.tags.map((t) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.projectLinkBtn}
                      >
                        View live {'\u2197'}
                      </a>
                    )}
                  </article>
                ))}
              </div>

              {/* More work */}
              <div className={styles.moreProjectsGrid}>
                {moreProjects.map((project) => (
                  <article key={project.id} className={styles.projectCard}>
                    <p className={styles.projectRole}>{project.role}</p>
                    <p className={styles.projectLabel}>{project.label}</p>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectBody}>{project.body}</p>
                    <div className={styles.projectTags}>
                      {project.tags.map((t) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.projectLinkBtn}
                      >
                        View live {'\u2197'}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </motion.section>

          <div className={styles.divider} aria-hidden="true" />

          {/* ── ENGINEERING PRINCIPLES ─────────────── */}
          <motion.section
            className={styles.section}
            aria-label="Engineering principles"
            {...getRevealProps(prefersReducedMotion, 0)}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum} aria-hidden="true">03</span>
              <h2 className={styles.sectionTitle}>Engineering principles</h2>
            </div>
            <div className={styles.principleGrid}>
              {principles.map((p) => (
                <article key={p.num} className={styles.principleCard}>
                  <span className={styles.principleNum} aria-hidden="true">{p.num}</span>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.principleBody}>{p.body}</p>
                </article>
              ))}
            </div>
          </motion.section>

          {/* ── ARCHITECTURE CALLOUT ──────────────── */}
          <motion.div {...getRevealProps(prefersReducedMotion, 0)}>
            <div className={styles.architectureCallout}>
              <p className={styles.calloutQuote}>
                &ldquo;A frontend that&rsquo;s hard to extend was never finished.{' '}
                <span>It was abandoned.</span>&rdquo;
              </p>
              <p className={styles.calloutSub}>
                My architecture work starts with understanding how a system will grow, not just how
                it needs to work today. Decisions made in the first sprint compound for years.
              </p>
            </div>
          </motion.div>

          <div className={styles.divider} aria-hidden="true" />

          {/* ── TECHNOLOGY STACK ────────────────────── */}
          <motion.section
            id="stack"
            className={styles.section}
            aria-label="Technology stack"
            {...getRevealProps(prefersReducedMotion, 0)}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum} aria-hidden="true">04</span>
              <h2 className={styles.sectionTitle}>Technology</h2>
            </div>
            <div className={styles.stackGrid}>
              {stack.map((group) => (
                <div key={group.label} className={styles.stackGroup}>
                  <span className={styles.stackGroupLabel}>{group.label}</span>
                  <ul className={styles.stackItems}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── ADDITIONAL EXPERIENCE ─────────────── */}
          <motion.section
            className={styles.section}
            aria-label="Additional experience"
            {...getRevealProps(prefersReducedMotion, 0)}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum} aria-hidden="true">05</span>
              <h2 className={styles.sectionTitle}>Broader expertise</h2>
            </div>
            <ul className={styles.additionalGrid}>
              {additionalExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>

          <div className={styles.divider} aria-hidden="true" />

          {/* ── PROCESS ─────────────────────────────── */}
          <motion.section
            id="process"
            className={styles.section}
            aria-label="Working process"
            {...getRevealProps(prefersReducedMotion, 0)}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum} aria-hidden="true">06</span>
              <h2 className={styles.sectionTitle}>How I work</h2>
            </div>
            <div className={styles.twoCol}>
              <article className={styles.listCard}>
                <h3 className={styles.listCardTitle}>You can expect</h3>
                <ul className={styles.listCardItems}>
                  {workStyle.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className={styles.listCard}>
                <h3 className={styles.listCardTitle}>I work best with</h3>
                <ul className={styles.listCardItems}>
                  {bestFit.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </motion.section>

          {/* ── CONTACT ─────────────────────────────── */}
          <motion.section
            id="contact"
            className={styles.contact}
            aria-label="Contact"
            {...getRevealProps(prefersReducedMotion, 0)}
          >
            <p className={styles.contactEyebrow}>Let&rsquo;s work together</p>
            <h2 className={styles.contactHeading}>
              Have a frontend problem worth solving?
            </h2>
            <p className={styles.contactSub}>
              If you need architecture, design systems, or implementation done properly — let&rsquo;s
              talk about what you&rsquo;re building.
            </p>
            <div className={styles.contactActions}>
              <a href="mailto:numankhaan4@gmail.com" className={styles.primaryBtn}>
                numankhaan4@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/numan-ul-haq-05338793/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.ghostBtn}
              >
                LinkedIn profile
              </a>
              <a
                href="https://drive.google.com/file/d/1vGiWiTHESVfH9IEYBKtkUggoIP623Xbd/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.ghostBtn}
              >
                View r&eacute;sum&eacute; {'\u2197'}
              </a>
            </div>
          </motion.section>
        </main>

        <footer className={styles.footer}>
          <span className={styles.footerBrand}>
            Numan Ul Haq &middot; {new Date().getFullYear()}
          </span>
          <nav className={styles.footerLinks} aria-label="Footer links">
            <a href="mailto:numankhaan4@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/numan-ul-haq-05338793/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/numankhan4"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            <a
              href="https://stackoverflow.com/users/6932845/numan-ul-haq"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
          </nav>
        </footer>
      </div>
    </>
  )
}
