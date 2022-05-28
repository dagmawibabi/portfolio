import './App.css';
import { AboutMe } from './components/AboutMe';
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
        <Projects />
      </div>
    </div>
  );
}

export default App;
