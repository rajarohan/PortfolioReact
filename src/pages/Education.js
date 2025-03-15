import styled from "styled-components";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const EducationContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 20px; // Add padding-top to account for Navbar height
  text-align: center;
  position: relative;
  z-index: 1;
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
  }
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const EducationCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Institution = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const Degree = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const Grade = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  font-weight: bold;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const educationData = [
  {
    institution: "SR University, Warangal, India",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2022 - 2026",
    grade: "9.3 CGPA",
  },
  {
    institution: "Narayana Junior College, Hyderabad, India",
    degree: "Intermediate Education",
    duration: "2020 - 2022",
    grade: "91.3%",
  },
  {
    institution: "Dr. KKR's Gowtham Concept School, Kushaiguda, Hyderabad, India",
    degree: "Higher Secondary Education",
    duration: "2017 - 2020",
    grade: "10.0 CGPA",
  },
];

function Education() {
  return (
    <EducationContainer>
      <ParticleBackground />
      <Title>Education</Title>
      <EducationGrid>
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Institution>{education.institution}</Institution>
            <Degree>{education.degree}</Degree>
            <Grade>Grade: {education.grade}</Grade>
            <Duration>{education.duration}</Duration>
          </EducationCard>
        ))}
      </EducationGrid>
    </EducationContainer>
  );
}

export default Education;