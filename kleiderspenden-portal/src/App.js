// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Impressum from './components/Impressum';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="registration">
          <RegistrationForm />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="impressum">
          <Impressum />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

