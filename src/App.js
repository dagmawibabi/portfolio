import './App.css';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className='app'>
      <div>
        <NavBar />        
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
