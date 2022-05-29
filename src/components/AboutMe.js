import './AboutMe.css'
export const AboutMe = () => {
    return (
        <div id='aboutMe' className="sectionContainer aboutMeContainer">
            <div className='aboutMeContent'>
                <div className='flexSpaceBetween'>
                    <h2 id='aboutMe'  className='sectionTitle'> <span className='linkText'> 01. </span> About Me </h2>
                    <div className='horizontalLine'></div>
                </div>
                <p>
                    Hello! My name is Dagmawi and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <br></br>
                <p>
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at <span className='linkText'> Dream Intelligence </span> for a variety of clients.
                </p>
                <br></br>
                <p>
                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                </p>
                <br></br>
                <p>
                    Here are a few technologies I’ve been working with recently:
                </p>
                <div className='flexSpaceBetween list' style={{width: '300px', marginLeft: '15px'}}>
                    <ul>
                        <li> React </li>
                        <li> Flutter </li>
                        <li> NodeJS </li>
                        <li> TailWind </li>
                        <li> MongoDB </li>
                    </ul>
                    <ul>
                        <li> Sass </li>
                        <li> Prisma </li>
                        <li> GraphQL </li>
                        <li> Typescript </li>
                    </ul>
                    <ul>
                        <li> C# </li>
                        <li> C++ </li>
                        <li> Python </li>
                    </ul>
                </div>

            </div>
            <div className='myPhotoReveal'>
                <div className='highlightBorder'> </div>
                <img alt='myPhoto' className='myPhoto' src={require('../assets/me.png')}></img>
            </div>
        </div>
    );
}