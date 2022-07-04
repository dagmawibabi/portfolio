import './App.css';
import { AboutMe } from './components/AboutMe';
import { ContactMe } from './components/ContactMe';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className='app'>
      <div>
        <NavBar />        
        <LandingPage />
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
        {/* <SideContacts /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
