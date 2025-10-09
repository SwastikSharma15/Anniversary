import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import img11 from '../../assets/11.jpg'
import img9 from '../../assets/9.jpg'
import img8 from '../../assets/8.jpg'
import img10 from '../../assets/10.jpg'
import img12 from '../../assets/12.jpg'
import img23 from '../../assets/23.jpg'

// Placeholder images - replace with actual family photos
const images = [
  img11,
  img9,
  img8,
  img10,
  img12,
  img23,
];

const Gallery = () => {
  return (
    <section id="gallery" className="memories-gallery-section">
      <div className="memories-container">
        <motion.h2 
          className="memories-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          A Moment, A Memory, A Lifetime
        </motion.h2>
        
        <div className="memories-gallery-grid">
          {images.map((image, index) => (
            <motion.div 
              className="memories-gallery-item"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src={image} alt={`Family memory ${index + 1}`} className="memories-gallery-img" />
              <div className="memories-gallery-overlay">
                <span>❤️</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;