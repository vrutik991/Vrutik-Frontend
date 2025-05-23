import React from 'react'
import "./projects.css"
import Project from './Project';
import wanderlust from '../../assets/wanderlust.png'
import foodWaste from '../../assets/foodWaste.png'
import ecommerce from '../../assets/ecommerce.png'

const Projects = () => {
  const projects = [
    {
      title: 'Wanderlust',
      description: 'WanderLust is an Web App made by using EJS as its Frontend and Node.js as its Backend . Its used to list various places by Logging in to the application and also you can give your review about the stay you had.',
      image: `${wanderlust}`,
      projectType: 'College',
      year: '2023',
      role: 'Full Stack Developer',
      liveDemo: '#',
      github: 'https://github.com/vrutik991/Wanderlust.git',
    },
    {
      title: 'Food Waste Reduction',
      description: 'Developed a Node.js backend for a food donation app that connects users with nearby NGOs to reduce food waste.',
      image: `${foodWaste}`,
      projectType: 'Internship',
      year: '2025',
      role: 'Full Stack Developer',
      liveDemo: '#',
      github: 'https://github.com/vrutik991/Food_Waste_Reduction.git',
    },
    {
      title: 'E-commerce product page',
      description: 'This is a project that showcases my skills in React integrated with backend.',
      image: `${ecommerce}`,
      projectType: 'Self',
      year: '2022',
      role: 'Full Stack Developer',
      liveDemo: '#',
      github: 'https://github.com/vrutik991/FullStack-React-App.git',
    },
  ];
  return (
    <div>
      <div className="project-container">
        <h2>FEATURED PROJECTS</h2>
        <p>Here are some of the selected projects that showcase my passion for Web Development.</p>
        <br /><br />
        {projects.map((project, index) => (
          <Project key = {index} project = {project} />
        ))}
      </div>
    </div>
  )
}

export default Projects