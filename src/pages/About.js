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
        <Text>
        Hi, I’m Rajarohan, a developer passionate about AI, full-stack development, and problem-solving. Currently pursuing CSE-AIML at SR University, I build innovative tech solutions. My projects include Nyaay Saathee an AI-based legal assistant. I secured Top 5 in Epotime 25’ and 11th place at a national hackathon. Skilled in TensorFlow, OpenCV, MERN Stack, and Android (Java/Kotlin), I love working on AI-driven applications. As a former Sports Club VP and volleyball player, I thrive on teamwork and challenges. Let’s connect and build something amazing! 🚀
        </Text>
      </AboutCard>
    </AboutContainer>
  );
}

export default About;