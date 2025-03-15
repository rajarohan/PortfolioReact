import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  background: rgba(10, 25, 47, 0.8);
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 15px;
  background: rgba(10, 25, 47, 0.8);
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 15px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #52d1b2;
  }
`;

function Contact() {
  const handleSendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = `Message from ${name}`;
    const body = `Name: ${name} \n Email: ${email} \n Message: ${message}`;
    const mailtoLink = `mailto:rajarohanreddy529@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <ContactContainer>
      <ParticleBackground />
      <Form
        onSubmit={handleSendEmail}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Input type="text" name="name" placeholder="Name" required />
        <Input type="email" name="email" placeholder="Email" required />
        <TextArea name="message" placeholder="Message" rows="5" required />
        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;