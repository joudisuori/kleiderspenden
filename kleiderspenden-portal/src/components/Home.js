import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Willkommen auf der Kleiderspenden-Website</h1>
      <p>Hier erfahren Sie mehr über aktuelle Krisen und wie Sie helfen können:</p>
      <section>
        <h2>Aktuelle Krisen</h2>
        <ul className="crisis-list">
          <li>
            <h3>Syrien</h3>
            <p>Anhaltender Konflikt seit 2011 hat zu einer massiven humanitären Krise geführt, mit Millionen von Vertriebenen und schwerwiegenden Auswirkungen auf das tägliche Leben.</p>
          </li>
          <li>
            <h3>Jemen</h3>
            <p>Der Bürgerkrieg hat eine katastrophale humanitäre Krise ausgelöst, mit Millionen von Menschen, die auf Hilfe angewiesen sind und eine hohe Rate an Unterernährung.</p>
          </li>
          <li>
            <h3>Ukraine</h3>
            <p>Seit 2014 gibt es einen anhaltenden Konflikt, der zu großen humanitären Problemen führt, einschließlich der Vertreibung von Menschen und Zerstörung von Infrastruktur.</p>
          </li>
          <li>
            <h3>Afghanistan</h3>
            <p>Politische Unsicherheit und anhaltende Konflikte haben die humanitäre Situation verschärft, mit einem Mangel an grundlegenden Lebensmitteln und medizinischer Versorgung.</p>
          </li>
          <li>
            <h3>Venezuela</h3>
            <p>Die Wirtschaftskrise und politische Unruhen haben zu einem massiven Anstieg der Armut und der Migration geführt, wobei viele Menschen grundlegende Lebensbedürfnisse nicht mehr decken können.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;

