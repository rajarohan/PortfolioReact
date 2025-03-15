import styled from "styled-components";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const SkillsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 20px; // Add padding-top to account for Navbar height
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 60px 20px 20px; // Adjust for smaller screens
  }

  @media (max-width: 480px) {
    padding: 40px 10px 10px; // Adjust for mobile screens
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 40px 0 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 30px 0 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 20px 0 10px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Grouped skills by category
const skillsData = {
  Languages: [
    { name: "Python", icon: "🐍" },
    { name: "C", icon: "🔧" },
    { name: "Java", icon: "☕" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
  ],
  Frameworks: [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "Flask", icon: "🍶" },
  ],
  Tools: [
    { name: "Git", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
    { name: "Google Chrome", icon: "🌐" },
    { name: "GitHub", icon: "🐱" },
    { name: "Google Colab", icon: "📒" },
    { name: "Android Studio", icon: "🤖" },
  ],
  "AI/ML": [
    { name: "TensorFlow", icon: "🧠" },
    { name: "Scikit-Learn", icon: "📊" },
    { name: "Computer Vision", icon: "👁️" },
    { name: "Natural Language Processing", icon: "🗣️" },
  ],
  Databases: [
    { name: "SQL", icon: "🗃️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
  ],
  Libraries: [
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🧮" },
    { name: "Matplotlib", icon: "📊" },
    { name: "Seaborn", icon: "🌊" },
    { name: "OpenCV", icon: "🔍" },
  ],
};

function Skills() {
  return (
    <SkillsContainer>
      <ParticleBackground />
      <Title>My Skills</Title>

      {Object.entries(skillsData).map(([category, skills], index) => (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <SkillsGrid>
            {skills.map((skill, skillIndex) => (
              <SkillCard
                key={skillIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: skillIndex * 0.2 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </div>
      ))}
    </SkillsContainer>
  );
}

export default Skills;