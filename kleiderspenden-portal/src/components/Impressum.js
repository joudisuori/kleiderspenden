// src/pages/Impressum.js
import React from 'react';
import './Impressum.css';

const Impressum = () => (
  <div className="impressum">
    <h1>Impressum</h1>
    <address>
      <p>Firmenname: Kleiderspenden GmbH</p>
      <p>Adresse: Musterstraße 1, 12345 Düsseldorf, Deutschland</p>
      <p>Telefon: 01234-567890</p>
      <p>Email: <a href="mailto:kontakt@kleiderspenden.de">kontakt@kleiderspenden.de</a></p>
      <p>Geschäftsführer: Joudi Alsouri</p>
      <p>Registergericht: Düsseldorf</p>
      <p>Handelsregister-Nr.: 12345678</p>
    </address>
  </div>
);

export default Impressum;

