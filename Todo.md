1. in Their Love Story section remove everyhthing and use this instead 

import ThreeDHoverGallery from "@/components/ui/3d-hover-gallery";

// Basic usage
<ThreeDHoverGallery />

// With custom images
<ThreeDHoverGallery
  images={[
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
  ]}
  onImageClick={(index, image) => console.log(`Clicked image ${index + 1}`)}
/>

// Advanced configuration
<ThreeDHoverGallery
  itemWidth={4}
  itemHeight={15}
  gap={0.6}
  perspective={40}
  hoverScale={12}
  transitionDuration={1.5}
  backgroundColor="#0a0a0a"
  grayscaleStrength={0.8}
  brightnessLevel={0.6}
  activeWidth={35}
  enableKeyboardNavigation={true}
  autoPlay={true}
  autoPlayDelay={4000}
  onImageClick={(index, image) => handleImageClick(index, image)}
  onImageHover={(index, image) => handleImageHover(index, image)}
/>

2. The hearts inside Surprise section are misaligned, fix it.

3. below closing section add this 3d image ring 

import { Draggable3DImageRing } from "@/components/ui/draggable-3d-image-ring";

Basic Usage
Here’s a simple example of how to use this component

<Draggable3DImageRing images={imageUrls} />