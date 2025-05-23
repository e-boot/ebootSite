
import ProjectSection from './sections/ProjectSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import Navbar from './sections/Navbar.jsx';



function App() {
   
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectSection/>
    </>
  );
}

export default App;