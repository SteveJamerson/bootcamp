import React from 'react';
import Button from '../../components/Atoms/Button';
import { Section } from './styles';
import { useAuth } from './../../contexts/AuthContext'

const Home = () => {
  const { logout, currentUser } = useAuth()

  const handleLogout = async () => {
      await logout()
  }

  return (
    <Section>
      <h1>Olá <u>{currentUser.displayName}</u>!</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </Section>
  );
};

export default Home