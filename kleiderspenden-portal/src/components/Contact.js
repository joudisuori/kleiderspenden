import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Kontaktieren Sie uns</h2>
      <p>Wir freuen uns über Ihre Fragen, Anregungen oder Feedback. Füllen Sie bitte das folgende Formular aus, um uns zu kontaktieren:</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Ihr Name" required />

        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email" placeholder="Ihre E-Mail-Adresse" required />

        <label htmlFor="message">Nachricht</label>
        <textarea id="message" name="message" rows="5" placeholder="Ihre Nachricht" required></textarea>

        <button type="submit">Nachricht senden</button>
      </form>
    </div>
  );
}

export default Contact;

