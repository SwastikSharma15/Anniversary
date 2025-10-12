import React from 'react';
import ThreeDHoverGallery from "../ui/3d-hover-gallery";
import './Timeline.css';
import img22 from '../../assets/22.jpg'
import img16 from '../../assets/16.jpg'
import img15 from '../../assets/15.jpg'
import img40 from '../../assets/40.jpg'
import img6 from '../../assets/6.jpg'

const Timeline = () => {
  // Custom images for the love story
  const loveStoryImages = [
    img16,
    img22,
    img15,
    img40,
    img6
  ];

  const handleImageClick = (index, image) => {
    console.log(`Clicked on moment ${index + 1}`);
  };

  return (
    <section id="timeline" className="timeline-section">
      <ThreeDHoverGallery 
        images={loveStoryImages}
        positions={[
          "50% 20%",   // img22
          "50% 25%",// img16
          "50% 30%",      // img15 (custom fine-tuning)
          "80% 20%",// img1
          "40% 20%",      // img6
        ]}
        itemWidth={10}
        itemHeight={25}
        gap={0.6}
        perspective={40}
        hoverScale={12}
        transitionDuration={1.5}
        backgroundColor="transparent"
        grayscaleStrength={0.8}
        brightnessLevel={0.6}
        activeWidth={35}
        enableKeyboardNavigation={true}
        autoPlay={true}
        autoPlayDelay={4000}
        onImageClick={handleImageClick}
      />
    </section>
  );
};

export default Timeline;