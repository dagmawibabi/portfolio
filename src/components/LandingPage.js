import './LandingPage.css';

export const LandingPage = () => {
    return(
        <div className='banner'>
            <div className='bannerElementContainer'>
                <p className='linkText'> Hi, my name is </p>
                <h1 className='name'> Dagmawi Babi. </h1>
                <h1 className='subtitle'> I am a fullstack engineer. </h1>
                <div>
                    <p className='bio'> I’m a software engineer specializing in building exceptional digital products. Currently, I’m focused on building my own start up at <span className='linkText'> Dream Intelligence </span> . </p>
                </div>
                <button className='outlinedBtn '> Check out my start up</button>
            </div>
        </div>
    );
}