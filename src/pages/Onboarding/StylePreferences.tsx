// src/pages/Onboarding/StylePreferences.tsx
// src/pages/Onboarding/StylePreferences.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StylePreferences.css';

function StylePreferences() {
  const navigate = useNavigate();
  const [selectedStyles, setSelectedStyles] = useState([]);

  // Style options with placeholder images
  const styleOptions = [
    { id: 1, name: 'Casual', image: 'https://picsum.photos/200/250?random=20' },
    { id: 2, name: 'Formal', image: 'https://picsum.photos/200/250?random=21' },
    { id: 3, name: 'Streetwear', image: 'https://picsum.photos/200/250?random=22' },
    { id: 4, name: 'Vintage', image: 'https://picsum.photos/200/250?random=23' },
    { id: 5, name: 'Bohemian', image: 'https://picsum.photos/200/250?random=24' },
    { id: 6, name: 'Minimalist', image: 'https://picsum.photos/200/250?random=25' },
  ];

  const toggleStyle = (styleId) => {
    if (selectedStyles.includes(styleId)) {
      // Remove if already selected
      setSelectedStyles(selectedStyles.filter(id => id !== styleId));
    } else {
      // Add if not selected (max 3)
      if (selectedStyles.length < 3) {
        setSelectedStyles([...selectedStyles, styleId]);
      }
    }
  };

  const handleSkip = () => {
    navigate('/home');  // Changed to /home
  };

  const handleNext = () => {
    console.log('Selected styles:', selectedStyles);
    navigate('/home');  // Changed to /home
  };

  return (
    <div className="style-preferences-page">
      <div className="preferences-header">
        <h1>Build Your Thrifted Feed</h1>
        <p className="subtitle">Styles (pick up to 3)</p>
      </div>

      <div className="styles-grid">
        {styleOptions.map((style) => (
          <div
            key={style.id}
            className={`style-card ${selectedStyles.includes(style.id) ? 'selected' : ''}`}
            onClick={() => toggleStyle(style.id)}
          >
            <img src={style.image} alt={style.name} />
            <div className="style-overlay">
              <p className="style-name">{style.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="preferences-actions">
        <button className="skip-button" onClick={handleSkip}>
          Skip
        </button>
        <button 
          className="next-button" 
          onClick={handleNext}
          disabled={selectedStyles.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StylePreferences;