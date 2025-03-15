import styled from "styled-components";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const AboutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 1; // Ensure content is above the particle background
`;

const AboutCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.8);
  padding: 40px;
  border-radius: 15px;
  max-width: 800px;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  object-fit: cover;
`;

const FunFact = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  margin-top: 20px;
`;

function About() {
  return (
    <AboutContainer>
      <ParticleBackground />
      <AboutCard
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>About Me</Title>
        <Photo src="/logo.png" alt="Rajarohan" />
        <Text>
          Hi, I’m <strong>Rajarohan Reddy Vaidyula</strong>, a developer passionate about AI, full-stack development, and problem-solving. 
          My journey into tech began with a curiosity for building things that solve real-world problems. 
          Currently pursuing <strong>CSE-AIML at SR University</strong>, I’ve worked on projects like <strong>Nyaay Saathee</strong>, 
          an AI-based legal assistant, and secured <strong>Top 5 in Epotime 25’</strong> and <strong>11th place at a national hackathon</strong>.
        </Text>
        <Text>
          I’m skilled in <strong>TensorFlow, OpenCV, MERN Stack, and Android (Java/Kotlin)</strong>, and I love working on AI-driven applications. 
          When I’m not coding, you’ll find me playing volleyball or leading teams as the former <strong>Sports Club VP</strong>. 
          I thrive on challenges and teamwork, and I’m always excited to learn and grow.
        </Text>
        <FunFact>
          Fun fact: I once built a mini AI chatbot in 24 hours during a hackathon! 🚀
        </FunFact>
      </AboutCard>
    </AboutContainer>
  );
}

export default About;