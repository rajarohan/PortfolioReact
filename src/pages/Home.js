import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import rajarohanPhoto from "../assets/rajarohan.jpg";
import Loader from "../components/Loader";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled(motion.div)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const PhotoContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(45deg, #00ffcc, #0077ff);
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(100, 255, 218, 0.8);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid transparent;
  background: ${({ theme }) => theme.colors.background} padding-box;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
  }
`;

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HomeContainer>
      <ParticleBackground />
      <Content
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <PhotoContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Photo src={rajarohanPhoto} alt="Rajarohan" />
        </PhotoContainer>
        <Title>
          Hi, I'm <Highlight>Rajarohan</Highlight>
        </Title>
        <Subtitle>Full Stack Developer | AI/ML Enthusiast</Subtitle>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/rajarohan-reddy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com/rajarohan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://leetcode.com/u/RajaRohan_Reddy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </SocialLink>
          <SocialLink
            href="https://www.codechef.com/users/raja_rohan21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodechef />
          </SocialLink>
          <SocialLink
            href="https://www.hackerrank.com/profile/2203a52126"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiHackerrank />
          </SocialLink>
        </SocialLinks>
      </Content>
    </HomeContainer>
  );
}

export default Home;