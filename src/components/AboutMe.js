import './AboutMe.css'
export const AboutMe = () => {
    return (
        <div id='aboutMe' className="sectionContainer aboutMeContainer">
            <div className='aboutMeContent'>
                <div className='flexSpaceBetween'>
                    <h2 id='aboutMe'  className='sectionTitle'> <span className='linkText'> 01. </span> About Me </h2>
                    <div className='horizontalLine'></div>
                </div>
                <div className='someSpace'>
                    <p>
                        Hello! My name is Dagmawi and I enjoy creating tech solutions to my daily problems. My interest in software development started back in 2013 when I accidentally stumbled upon a batch programming ebook in one of my harddrives — turns out there's so much you could do on a black & white terminal!
                    </p>
                    <br></br>
                    <p>
                        Fast-forward to today, and I’ve had the privilege of working at an 
                        <span className='linkText'> <a href='https://ArifEvents.com' target='_blank' rel='noreferrer'> event organizing company </a> </span> , 
                        <span className='linkText'> <a href='https://AblazeLabs.com' target='_blank' rel='noreferrer'> multiple start-ups </a> </span> ,
                        <span className='linkText'> <a href='https://twitter.com/MoF_Ethiopia' target='_blank' rel='noreferrer'> a huge corporation </a> </span> , 
                        and a
                        <span className='linkText'> <a href='https://dagmawibabi.github.io/DigitalArtsClub/index.html' target='_blank' rel='noreferrer'> student-led design club </a> </span>
                        . My main focus these days is building accessible, inclusive products and digital experiences at <span className='linkText'> <a href='https://dreamintelligence.dagmawibabi.com' target='_blank' rel='noreferrer'> Dream Intelligence </a> </span> for a variety of clients.
                    </p>
                    {/* <br></br>
                    <p>
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p> */}
                    <br></br>
                    <p>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <div className='flexSpaceBetween list' style={{width: '440px', marginLeft: '15px'}}>
                        <ul>
                            <li> React </li>
                            <li> Flutter </li>
                            <li> NodeJS </li>
                            <li> Tailwind </li>
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
                        <ul>
                            <li> Unity </li>
                            <li> Illustrator </li>
                        </ul>
                    </div>                    
                </div>

            </div>
            <div className='myPhotoReveal'>
                <div className='highlightBorder someSpace' > </div>
                <img alt='myPhoto' className='myPhoto' src={require('../assets/me.png')}></img>
            </div>
        </div>
    );
}