import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './Surprise.css';

const Surprise = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSurpriseClick = () => {
    setShowConfetti(true);
    setShowMessage(true);
    
    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <section id="surprise" className="surprise-section">
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
      <div className="container">
        <motion.div 
          className="surprise-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>A Special Surprise</h2>
          <motion.button 
            className="btn surprise-btn"
            onClick={handleSurpriseClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click for a Surprise
          </motion.button>
          
          {showMessage && (
            <motion.div 
              className="surprise-message glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hearts-container">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="floating-heart"
                    initial={{ 
                      x: Math.random() * 400 - 200, 
                      y: Math.random() * 400 - 200,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: [0, -100],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  >
                    ❤️
                  </motion.div>
                ))}
              </div>
              <h3>We Love You!</h3>
              <p>Thank you for being the most amazing parents anyone could ask for. Your love story continues to inspire everyone around you.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Surprise;