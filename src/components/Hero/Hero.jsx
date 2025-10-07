import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';
import Particles from './Particles';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Particles container */}
      <div className="particles-container">
        <Particles
          particleColors={['#e6c78e', '#e6c78e']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={205}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero content */}
      <div className="hero-content-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Happy 25th Anniversary, Mumma Ji & Papa Ji <span className="heart">❤️</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="subtitle"
          >
            25 years of love, laughter, and togetherness.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
