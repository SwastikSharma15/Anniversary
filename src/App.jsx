import React from 'react'
import './App.css'
import './styles/global.css'

// Import components
import Hero from './components/Hero/Hero'
import Timeline from './components/Timeline/Timeline'
import Gallery from './components/Gallery/Gallery'
import Message from './components/Message/Message'
import Surprise from './components/Surprise/Surprise'
import Closing from './components/Closing/Closing'
import Draggable3DImageRing from './components/ui/draggable-3d-image-ring'

// Sample image URLs for the 3D Image Ring
const imageUrls = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
];

function App() {
  return (
    <div className="anniversary-app">
      <Hero />
      <Timeline />
      <Gallery />
      <Message />
      <Surprise />
      <Closing />
      <div style={{ width: '100%', height: '700px', }}>
        <iframe src='https://my.spline.design/likesbutton-iGFKtVuf1w5gKGqmDT7vifBH/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
    </div>
  )
}

export default App
