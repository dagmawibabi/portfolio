import './NavBar.css';
import resume from '../assets/resume/DagmawiEsayas.pdf';

export const NavBar = () => {
    return (
        <div className='navBar'>
            <div>
                <a href='#home'>
                    <img className="logo" src={require("../assets/drawing.png")} alt="logo"></img>
                </a>
            </div>
            <div className='navBarItems'>
                <ol>                    
                    <a href='#aboutMe' rel='noreferrer'>
                        <li> <span> 01. </span> About </li>
                    </a>
                    <a href='#experience'>
                        <li> <span> 02. </span> Experience </li>
                    </a>
                    <a href='#projects'>
                        <li> <span> 03. </span> Projects </li>
                    </a>
                    <a href='#contactMe'>
                        <li> <span> 04. </span> Contact </li>
                    </a>
                    <a href={resume} target='_blank' rel='noopener noreferrer'>
                        <button className='outlinedBtn resumeBtn'>  Resume </button>
                    </a>
                </ol>
            </div>
        </div>
    );
}