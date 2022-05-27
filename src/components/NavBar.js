import './NavBar.css';

export const NavBar = () => {
    return (
        <div className='navBar'>
            <div>
                <img className="logo" src={require("../assets/drawing.png")} alt="logo"></img>
            </div>
            <div className='navBarItems'>
                <ol>
                    <li> <span> 01. </span> About </li>
                    <li> <span> 02. </span> Experience </li>
                    <li> <span> 03. </span> Work </li>
                    <li> <span> 04. </span> Contact </li>
                    <button className='outlinedBtn resumeBtn'>  Resume </button>
                </ol>
            </div>
        </div>
    );
}