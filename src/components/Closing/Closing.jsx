import CircularGallery from './CircularGallery'
import { motion } from 'framer-motion';
import './Closing.css';
import img22 from '../../assets/22.jpg';
import img37 from '../../assets/37.jpg';
import img33 from '../../assets/33.jpg';
import img32 from '../../assets/32.jpg';
import img30a from '../../assets/30a.jpg';
import img29a from '../../assets/29a.jpg';
import img28 from '../../assets/28.jpg';
import img27a from '../../assets/27a.jpg';
import img26a from '../../assets/26a.jpg';
import img25a from '../../assets/25a.jpg';
import img24a from '../../assets/24a.jpg';
import img18 from '../../assets/18.jpg';
import img2 from '../../assets/2.jpg';
import img54 from '../../assets/54.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img13 from '../../assets/13.jpg';
import img17 from '../../assets/17.jpg';
import img20a from '../../assets/20a.jpg';
import img21 from '../../assets/21.jpg';
import img3 from '../../assets/3.jpg';
import img1 from '../../assets/1.jpg';

const Closing = () => {
  const anniversaryImages = [
    { image: img37, text: '' },
    { image: img33, text: '' },
    { image: img32, text: '' },
    { image: img30a, text: '' },
    { image: img29a, text: '' },
    { image: img28, text: '' },
    { image: img27a, text: '' },
    { image: img26a, text: '' },
    { image: img25a, text: '' },
    { image: img24a, text: '' },
    { image: img18, text: '' },
    { image: img22, text: '' },
    { image: img2, text: '' },
    { image: img6, text: '' },
    { image: img7, text: '' },
    { image: img13, text: '' },
    { image: img17, text: '' },
    { image: img20a, text: '' },
    { image: img21, text: '' },
    { image: img3, text: '' },
    { image: img1, text: '' },
    { image: img54, text: '' },
  ];
  return (
    <section id="closing" className="closing-section">
      <div className="container">
        <motion.div 
          className="closing-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Here's to forever love ❤️</h2>
          <p>May your love continue to grow stronger with each passing day.</p>
        </motion.div>
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          items={anniversaryImages}  // ✅ your images go here
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
};

export default Closing;