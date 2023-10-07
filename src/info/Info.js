import self from "../img/self.png"
import mock1 from "../img/project-dsm.png"
import mock2 from "../img/project-rms.png"
import mock3 from "../img/project-cintel.png"
import mock4 from "../img/cof-dashboard.png"
import mock5 from "../img/cof-academic.png"
import mock6 from "../img/homeVillas.png"
import mock7 from "../img/foodbakery.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Numan",
    lastName: " Ul Haq",
    initials: "NH", // the example uses first and last, but feel free to use three or more if you like.
    position: "Experienced Front-End Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💪',
            text: 'Passionate about crafting pixel-perfect websites'
        },
        {
            emoji: '🌎',
            text: 'Proudly located in Pakistan.'
        },
        {
            emoji: "💼",
            text: "Front-End Architect at i2c Inc."
        },
        {
            emoji: "📧",
            text: "Contact me at numankhaan4@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/numankhan4",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/numan-ul-haq-05338793/?originalSubdomain=pk",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://stackoverflow.com/users/6932845/numan-ul-haq",
            icon: "fa fa-stack-overflow",
            label: 'stackoverflow'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, I'm Numan, a passionate Front-End Web Developer with over ten years of experience crafting exceptional digital experiences. I specialize in React, Lit Element, and WordPress, delivering clean code and pixel-perfect designs that exceed expectations.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'Angular', 'Typescript', 'API Requests', 'litElement', 'Json','Ajax', 'MySql', 'JSON', 'Material UI', 'Sass',    'Custom Elements', 'git', 'github', 'bootstrap 5', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'Firebase', 'Express', ]
        }
    ,
    hobbies: [
        {
            label: 'games',
            emoji: '🎮'
        },
        {
            label: 'Acting',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "DSM Project",
            // live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            description: "I led a team of five developers in crafting a design system built on LitElement—a framework-agnostic technology. This system comprises expertly designed, highly adaptable UI components, streamlining development and ensuring consistency across our products. By consolidating these assets into a single repository, we save valuable time and focus on core functionality.",
            technologies: ['LitElement', 'Web components', 'Polymer', "React", "Docusaurus", 'lunrjs', 'custom-elements-manifest', 'LDAP Auth']
        },
        {
            title: "RMS Project",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock2,
            description: "As the lead developer, I guided a team of two developers in crafting a versatile Angular-based solution designed to simplify resource management. This comprehensive application enables seamless sign-in, hour logging, leave requests, and remote work facilitation. Its user-friendly interface streamlines workforce operations, making it an essential asset for optimizing efficiency.",
            technologies: ['Angular', 'Typescript', 'High Charts', "Angular Material", "Custom Components"]
        },
        {
            title: "C-Intel Project",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock3,
            description: "As a senior developer, I contributed to an innovative project that delivers the potential of interactive data visualizations. This powerful solution empowers users to explore, drill down, and discover new insights within their data. This intuitive reporting app unlocks the full potential of business intelligence, enhancing data-driven decision-making.",
            technologies: ['Angular', 'Typescript', 'Angular Dragula', 'Widgets Creation', 'QBE Reports', 'Data Table', 'SpagoBI', 'High Charts', "Angular Material", "Custom Components"]
        },
        {
            title: "COF Contests Project",
            live: "https://cof-contests.web.app/login",
            // source: "https://github.com/paytonjewell",
            image: mock4,
            description: "As a experience developer, I collaborated on an Angular-based dashboard app tailored for our client. This platform empowers students with a core curriculum and organization-specific content for academic bowls. It challenges students with rigorous questions, preparing them for success while promoting our client's brand. ",
            technologies: ['Angular', 'Typescript', 'Reports Creation', 'Firebase', 'Api data fetch', 'Data Table', 'Dynamic Charts', "Custom Components"]
        },
        {
            title: "COF Academic Project",
            live: "https://cof-academic-bowl.web.app",
            // source: "https://github.com/paytonjewell",
            image: mock5,
            description: "I've contributed to the development of a marketing website for the COF Contests dashboard app. This website serves as a comprehensive resource, providing insights into the COF dashboard project and details about academic bowl competitions. Built using Angular and the 'dashcore' theme, this project offers a dynamic and engaging platform to showcase the COF Contests app.",
            technologies: ['Angular', 'Typescript', 'Api data fetch', 'Sign in', 'Registration', "Styling"]
        },
        {
            title: "Real Estate WordPress Theme",
            live: "https://homevillas.chimpgroup.com/",
            // source: "https://github.com/paytonjewell",
            image: mock6,
            description: "As a senior front-end developer, I played a pivotal role in crafting a stunning Real Estate WordPress theme from scratch. Leveraging my expertise in HTML, CSS, JavaScript, and Bootstrap, I meticulously designed and developed a theme that stands out in the digital landscape. The theme is pixel perfect, w3c validation and responsive. ",
            technologies: ['ThemeForest', 'Bootstrap', 'HTML', 'JS', 'jQuery', 'Responsive', "Seo Friendly markup"]
        },

        {
            title: "Restaurant Directory WordPress Theme",
            live: "https://foodbakery.chimpgroup.com/",
            // source: "https://github.com/paytonjewell",
            image: mock7,
            description: "As a senior front-end developer, I took a leading role in crafting an impressive Restaurant Directory WordPress theme, leveraging my skills in HTML, CSS, JavaScript, and Bootstrap.The theme is pixel perfect, w3c validation and responsive.",
            technologies: ['Bootstrap', 'HTML', 'JS', 'jQuery', 'Responsive', 'ThemeForest', "Seo Friendly markup"]
        },
        
        
     
    ]
}