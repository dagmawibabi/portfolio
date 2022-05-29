import './LandingPage.css';

export const LandingPage = () => {
    return(
        <div id='home' className='banner'>
            <div className='bannerElementContainer'>
                <span className='linkText greeting'> Hi, my name is </span>
                <h1 className='name'> Dagmawi Babi. </h1>
                <h1 className='subtitle'> I am a fullstack engineer. </h1>
                <div>
                    <p className='bio'> I’m a software engineer specializing in building exceptional digital products. Currently, I’m focused on building my own start up at <span className='linkText'> Dream Intelligence </span> . </p>
                </div>
                <button className='outlinedBtn cta'> Check out my start up</button>
            </div>
        </div>
    );
}