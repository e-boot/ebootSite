
import ProjectSection from './sections/Projects.jsx';
import AboutSection from './sections/About.jsx';
import HeroSection from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';
import Footer from './sections/Footer.jsx';
import ScrollWrapper from './components/ScrollWrapper.jsx';



function App() {
   
  return (
    <>
    <Navbar />
    <ScrollWrapper>
    <HeroSection />
    <AboutSection />
    <ProjectSection/>
    <Footer />
    </ScrollWrapper>
    </>
  );
}

export default App;
