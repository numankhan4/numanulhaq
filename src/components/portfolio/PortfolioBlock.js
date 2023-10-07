import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, CardMedia, Chip } from "@mui/material";
import { styled } from '@mui/system';

const RootCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  padding: 20,
  margin: '0 auto',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.3)',
  },
}));

const MediaImage = styled(CardMedia)({
  objectFit: 'cover',
});

const Content = styled(CardContent)({
  padding: '16px',
});

const Title = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '8px',
});

const DescriptionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

const Description = styled(Typography)({
  fontSize: '1rem',
});

const ChipContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
  marginTop: '8px',
});

const ChipItem = styled(Chip)({
  backgroundColor: '#2196F3',
  color: 'white',
  marginRight: '4px',
});

const Actions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px',
});

const ActionButton = styled(Button)({
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
});

export default function PortfolioBlock({ project }) {
   const { title, description, image, live, source, technologies = [] } = project;

  return (
    <RootCard>
      <MediaImage
        component="img"
        alt={title}
        src={image}
      />
      <Content>
        <Title>{title}</Title>
        <DescriptionContainer>
          <Description>{description}</Description>
          {technologies.length?<Title>Skills and deliverables</Title>: null}
          <ChipContainer>
            {technologies.map((tech, index) => (
              <ChipItem key={index} label={tech} />
            ))}
          </ChipContainer>
        </DescriptionContainer>
      </Content>
      <Actions>
        {live && (
          <ActionButton
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
          >
            Live Demo
          </ActionButton>
        )}
        {source && (
          <ActionButton
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary"
          >
            Source Code
          </ActionButton>
        )}
      </Actions>
    </RootCard>
  );
}
