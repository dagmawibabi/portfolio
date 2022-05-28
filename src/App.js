import './App.css';
import { AboutMe } from './components/AboutMe';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className='app'>
      <div>
        <NavBar />        
        <LandingPage />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
