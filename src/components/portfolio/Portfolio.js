import React from 'react';
import { Container, Grid, Typography, Box } from "@mui/material";
import { info } from "../../info/Info";
import PortfolioBlock from "./PortfolioBlock";
import './Portfolio.css'; // Import your CSS here

const portfolioContainerStyles = {
  background: 'linear-gradient(135deg, #ff5722, #f50057)',
  padding: '50px 0',
  color: 'white',
};

const portfolioTitleStyles = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '50px',
  marginTop: '50px'
};

export default function Portfolio() {
  const { portfolio } = info;

  return (
    <Box >
    <Container maxWidth="lg" >
      <Box >
        <Typography variant="h2" align="center" style={portfolioTitleStyles}>
          My Portfolio
        </Typography>
        <Grid container spacing={5}>
          {portfolio.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PortfolioBlock project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    </Box>
  );
}
