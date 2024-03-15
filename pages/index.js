import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, World } from '../sections';
import { Element } from 'react-scroll';


const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <Element name='about'>
      <About />
      </Element>
      <div className="gradient-03 z-0" />
      <Element name='portfolio'>
      <Explore />
      </Element>
    </div>
    <div className="relative">
      <Element name='services'>
      <GetStarted />
      </Element>
      <div className="gradient-04 z-0" />
    </div>
    <Element name='goal'>
    <World />
    </Element>
    <div className="relative">
      <Element name='blog'>
      <Insights />
      </Element>
      <div className="gradient-04 z-0" />
      <Element name='contact'>
      <Feedback />
      </Element>
    </div>
    <Footer />
  </div>
);

export default Home;
