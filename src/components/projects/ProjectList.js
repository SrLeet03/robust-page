// App.js
import React from "react";
// import ProjectCard from "./ ProjectCard";
import Cards from "./cards";

// const projects = [
// 	{
// 		title: "Project 1",
// 		description: "Description for Project 1",
// 		imageUrl: "https://placekitten.com/300/150",
// 		githubLink: "https://github.com/your-username/project1",
// 	},
// 	{
// 		title: "Project 2",
// 		description: "Description for Project 2",
// 		imageUrl: "https://placekitten.com/300/150",
// 		githubLink: "https://github.com/your-username/project2",
// 	},

// 	{
// 		title: "Project 2",
// 		description: "Description for Project 2",
// 		imageUrl: "https://placekitten.com/300/150",
// 		githubLink: "https://github.com/your-username/project2",
// 	},

// 	{
// 		title: "Project 2",
// 		description: "Description for Project 2",
// 		imageUrl: "https://placekitten.com/300/150",
// 		githubLink: "https://github.com/your-username/project2",
// 	},
// 	// Add more projects as needed
// ];

const ProjectList = () => {
	return (
		<div 
    style={{ margin: "15vh auto" }}
    >
			<h1>Our Projects</h1>
			{/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div> */}
			<Cards />
		</div>
	);
};

export default ProjectList;
