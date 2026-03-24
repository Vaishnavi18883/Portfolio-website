import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero"><Hero /></section>
              <section id="about"><About /></section>
              <section id="skill"><Skill /></section>
              <section id="education"><Education /></section>
              <section id="contact"><Contact /></section>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;