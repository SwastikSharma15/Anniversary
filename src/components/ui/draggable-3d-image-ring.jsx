import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './draggable-3d-image-ring.css';

const defaultImages = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
];

export const Draggable3DImageRing = ({ 
  images = defaultImages,
  radius = 250,
  autoRotate = true,
  autoRotateSpeed = 5,
  imageSize = 100
}) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const itemCount = images.length;
  const angleStep = 360 / itemCount;

  useEffect(() => {
    if (autoRotate && !isDragging) {
      let lastTime = 0;
      
      const animate = (time) => {
        if (lastTime === 0) {
          lastTime = time;
        }
        
        const delta = time - lastTime;
        lastTime = time;
        
        setRotation(prev => (prev + autoRotateSpeed * (delta / 1000)) % 360);
        
        // Calculate which image is at the front
        const normalizedRotation = rotation % 360;
        const frontIndex = Math.round(normalizedRotation / angleStep) % itemCount;
        setActiveIndex((itemCount - frontIndex) % itemCount);
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [autoRotate, isDragging, autoRotateSpeed, angleStep, itemCount, rotation]);

  const handleMouseDown = (e) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setStartX(e.clientX);
      setRotation(prev => (prev + deltaX * 0.5) % 360);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const deltaX = e.touches[0].clientX - startX;
      setStartX(e.touches[0].clientX);
      setRotation(prev => (prev + deltaX * 0.5) % 360);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="image-ring-container">
      <h2 className="image-ring-title">Our Memories</h2>
      <div 
        className="image-ring"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {images.map((image, index) => {
          const angle = (index * angleStep + rotation) % 360;
          const radians = angle * (Math.PI / 180);
          const x = radius * Math.sin(radians);
          const z = radius * Math.cos(radians);
          const scale = 0.5 + (0.5 * (z + radius)) / (2 * radius);
          
          return (
            <motion.div
              key={index}
              className={`image-ring-item ${activeIndex === index ? 'active' : ''}`}
              style={{
                transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                zIndex: Math.round(z + radius),
                width: `${imageSize}px`,
                height: `${imageSize}px`,
              }}
              animate={{ opacity: scale }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={image} 
                alt={`Memory ${index + 1}`} 
                className="image-ring-img"
              />
              {activeIndex === index && (
                <div className="image-ring-caption">Memory {index + 1}</div>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="image-ring-instructions">
        Drag to rotate • Click to view
      </div>
    </div>
  );
};

export default Draggable3DImageRing;