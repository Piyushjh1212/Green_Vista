import React from 'react';
import './HomePage.css';
import ShowcasePage from './Plansthowcase/Plantshowcase';

const HomePage = () => {
  return (
    <>
      
      <main className="home-container">
        <section className="hero">
          <h1>Welcome to Green Vista 🌿</h1>
          <p>Your curated space to discover and showcase beautiful greenery.</p>
          <a href="#showcase" className="cta-button">Explore Now</a>
        </section>

        <section id="showcase" className="section">
          <h2>🌱 Plant Showcase</h2>
          <p>Discover a collection of curated plant displays and indoor jungles.</p>
          {/* Placeholder for dynamic plant cards */}
        </section>

        <section id="features" className="section features">
          <h2>✨ Features</h2>
          <ul>
            <li>🪴 Interactive plant display</li>
            <li>📷 Visual galleries</li>
            <li>📊 Growth and care tracking</li>
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h2>📬 Contact Us</h2>
          <p>Have questions or ideas? Let's grow together!</p>
        </section>
      </main>

      <ShowcasePage/>
    </>
  );
};

export default HomePage;
