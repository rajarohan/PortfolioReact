import styled from "styled-components";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

const ProjectContainer = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 1; // Ensure content is above the particle background
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.8);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const GitHubLink = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built using React, styled-components, and framer-motion.",
    github: "https://github.com/rajarohan/PortfolioReact",
  },
  {
    title: "Nyaay Saathee",
    description: "AI-based Legal Assistant",
    github: "https://github.com/rajarohan/Nyaay-Saathee.git",
  },
  {
    title: "Text Summarizer",
    description: "A Text Summarizer that extracts the most important information from a given text, providing a concise summary using Natural Language Processing (NLP) techniques.",
    github: "https://github.com/rajarohan/text-summarizer",
  },
  {
    title: "Simon Says Game",
    description:
      "The game challenges memory and attention, offering a fun and interactive experience for all ages.",
    github: "https://github.com/rajarohan/Simon_Says_Game",
  },
  {
    title: "Ask Me Anything App",
    description:
      "A simple web browser app developed using Java and XML in Android Studio. This app allows users to search and open websites.",
    github: "https://github.com/rajarohan/Ask_Me_Anything",
  },
  {
    title: "Meat Freshness Prediction App",
    description:
      "A smart Android application that detects the freshness of meat using Convolutional Neural Networks (CNNs).",
    github: "https://github.com/rajarohan/Meat",
  },
  {
    title: "To Do List App",
    description: "Simple To-Do List app to manage tasks efficiently.",
    github: "https://github.com/rajarohan/ToDo_List",
  },
  {
    title: "Notes App",
    description: "This is a simple notes app developed using Android Studio.",
    github: "https://github.com/rajarohan/Notes_App",
  },
  {
    title: "Diabetes Prediction",
    description:
      "A machine learning model to predict the likelihood of diabetes in individuals based on various features such as age, gender, BMI, blood pressure, etc.",
    github: "https://github.com/rajarohan/diabetes_prediction",
  },
];

function Projects() {
  return (
    <ProjectContainer>
      <ParticleBackground />
      <Title>Projects</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <GitHubLink
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </GitHubLink>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectContainer>
  );
}

export default Projects;