import SpotlightCard from './SpotlightCard'; // ✅ make sure this import exists
import { motion } from 'framer-motion';
import './Message.css';

const Message = () => {
  return (
    <section id="message" className="message-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ✅ Wrap your content inside SpotlightCard */}
          <SpotlightCard 
            className="custom-spotlight-card fixed-width-card" 
            spotlightColor="#abd2fcff"
          >
            <h2>A Message From Your Kids</h2>
            <div className="message-content">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="typewriter"
              >
                Dear Mom and Dad,
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 1 }}
              >
                Twenty-five years ago, you embarked on a beautiful journey together. 
                Through all of life's ups and downs, your love has remained a constant source of inspiration for us.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.3, duration: 1 }}
              >
                Thank you for showing us what true love looks like. 
                Your commitment, patience, and unwavering support for each other have taught us more than words can express.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.3, duration: 1 }}
              >
                Here's to 25 years of beautiful memories and to many more years of love and happiness ahead.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 4.3, duration: 1 }}
                className="signature"
              >
                With all our love,
                <br />
                Swastik & Shobhita
              </motion.p>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
