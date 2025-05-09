import React from 'react';

import './ShowcasePage.css';

const plants = [
    {
      id: 1,
      name: 'Areca Palm',
      description: 'An elegant indoor air-purifying plant.',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPf59kny5BXb0W9u2sTa5WnUIFEMba_HJ76K93QCZAhPEHL9kGElkU9bLMNeycsVrWi5roTXq_WXMTtopEjPd0Pt0kquI8_eePTz_JNmT2p0vImFGVP7bv0w',
    },
    {
      id: 2,
      name: 'Snake Plant',
      description: 'Low-maintenance and great for bedrooms.',
      image: 'https://nurserynisarga.in/wp-content/uploads/2025/01/eco-large.webp',
    },
    {
      id: 3,
      name: 'Monstera',
      description: 'Tropical vibes with unique split leaves.',
      image: 'https://images.squarespace-cdn.com/content/v1/56923fa6a976af0bfc533475/4487beac-be01-4ad5-8133-3276fb81972b/IMG_7938.jpg?format=2500w',
    },
    {
      id: 4,
      name: 'Peace Lily',
      description: 'Beautiful flowers and excellent air quality booster.',
      image: 'https://cdn.mos.cms.futurecdn.net/qYNPupRnspGWPF4886Z7hB-1280-80.jpg.webp',
    },
  ];
  

const ShowcasePage = () => {
  return (
    <>
      
      <main className="showcase-container">
        <h1>🌿 Plant Showcase</h1>
        <div className="plant-grid">
          {plants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h2>{plant.name}</h2>
              <p>{plant.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ShowcasePage;
