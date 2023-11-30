// ProjectCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './ProjectCard.scss';

const ProjectCard = ({ title, description, imageUrl, githubLink, onClick }) => {
  return (
    <Card className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" onClick={onClick}>
          Learn More
        </Button>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" />
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
