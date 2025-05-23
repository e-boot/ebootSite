
import ProjectSection from './sections/ProjectSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import Navbar from './sections/Navbar.jsx';
import ScrollWrapper from './components/ScrollWrapper.jsx';



function App() {
   
  return (
    <>
    <Navbar />
    <ScrollWrapper>
    <HeroSection />
    <AboutSection />
    <ProjectSection/>
    </ScrollWrapper>
    </>
  );
}

export default App;