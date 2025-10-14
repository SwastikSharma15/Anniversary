import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './3d-hover-gallery.css';

const defaultImages = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
  "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
  "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
];

const ThreeDHoverGallery = ({
  images = defaultImages,
  positions = [], 
  itemWidth = 10,
  itemHeight = 15,
  gap = 0.6,
  perspective = 40,
  hoverScale = 12,
  transitionDuration = 1.5,
  backgroundColor = "#0a0a0a",
  grayscaleStrength = 0.8,
  brightnessLevel = 0.6,
  activeWidth = 35,
  enableKeyboardNavigation = true,
  autoPlay = true,
  autoPlayDelay = 4000,
  onImageClick = (index, image) => console.log(`Clicked image ${index + 1}`),
  onImageHover = () => {}
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
        } else if (e.key === 'ArrowRight') {
          setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation, images.length]);

  useEffect(() => {
    if (autoPlay) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      }, autoPlayDelay);
      
      return () => clearInterval(autoPlayTimerRef.current);
    }
  }, [autoPlay, autoPlayDelay, images.length]);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    onImageHover(index, images[index]);
    if (autoPlay) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      }, autoPlayDelay);
    }
  };

  const handleClick = (index) => {
    onImageClick(index, images[index]);
  };

  return (
    <div 
      className="three-d-hover-gallery-container"
      ref={containerRef}
      style={{ 
        backgroundColor,
        perspective: `${perspective}rem`
      }}
    >
      <div className="gallery-title">25 Years of Love</div>
      <div className="gallery-items-container">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`gallery-item ${activeIndex === index ? 'active' : ''}`}
            style={{
              width: `${activeIndex === index ? activeWidth : itemWidth}%`,
              height: `${itemHeight}rem`,
              marginRight: index < images.length - 1 ? `${gap}rem` : 0,
              filter: `grayscale(${activeIndex === index ? 0 : grayscaleStrength}) brightness(${activeIndex === index ? 1 : brightnessLevel})`,
              transition: `all ${transitionDuration}s cubic-bezier(0.25, 0.4, 0.45, 0.9)`
            }}
            whileHover={{ 
              scale: activeIndex === index ? 1 : 1.05,
              rotateY: activeIndex === index ? 0 : 15,
              zIndex: 10
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            <div className="gallery-item-image">
              <img 
                src={image}
                alt={`Gallery ${index + 1}`} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: positions?.[index] || "center center",
                  borderRadius: "inherit"
                }}
              />
            </div>
            <div className="gallery-item-overlay">
              <div className="gallery-item-number">{index + 1}</div>
              <div className="gallery-item-caption">
                {index === 0 }
                {index === 1 }
                {index === 2 }
                {index === 3 }
                {index === 4 }
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDHoverGallery;