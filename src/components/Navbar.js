import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import { useState } from "react"; // For toggling the mobile menu
import resume from "../assets/Rajarohan's Resume-hackerresume.pdf"; // Import the resume file

const Nav = styled.nav`
  background: rgba(10, 25, 47, 0.8);
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    display: none; // Hide buttons on smaller screens
  }
`;

const Button = styled(motion.a)`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none; // Hide links on smaller screens
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    background: rgba(10, 25, 47, 0.9);
    width: 100%;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    &.active {
      display: flex; // Show links when menu is active
    }
  }
`;

const NavLink = styled(motion(Link))`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // Show hamburger icon on smaller screens
  }
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume; // Use the imported resume file
    link.download = "Rajarohan_Resume.pdf"; // Set the download filename
    link.click();
  };

  const handleHireMe = () => {
    // Replace with the actual link to your contact page or email
    window.location.href = "/contact";
  };

  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="Rajarohan Logo" />
      </Link>

      <ButtonsContainer>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadResume}
        >
          Download Resume
        </Button>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleHireMe}
        >
          Hire Me
        </Button>
      </ButtonsContainer>

      <MenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavLinks className={isMenuOpen ? "active" : ""}>
        <NavLink to="/" whileHover={{ scale: 1.1 }} onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" whileHover={{ scale: 1.1 }} onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/skills" whileHover={{ scale: 1.1 }} onClick={toggleMenu}>
          Skills
        </NavLink>
        <NavLink to="/projects" whileHover={{ scale: 1.1 }} onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink to="/contact" whileHover={{ scale: 1.1 }} onClick={toggleMenu}>
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;