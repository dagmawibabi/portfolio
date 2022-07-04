import { EachProject } from './EachProject';
import { FolderProject } from './FolderProject';
import './Projects.css'

export const Projects = () => {
    let isLeft = true;
    let projects = [
        {
            projectImage: require('../assets/projects/Aurora.jpg'),
            projectTitle: 'Aurora',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['Flutter', 'NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Hive', 'Wave'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/CovidTracker.jpg'),
            projectTitle: 'Covid Tracker',
            projectDescription: 'A feature rich telegram bot to help ease some tasks on telegram. It has features like web-screen, QR generator, covid stat tracker, Crypto price checker and much more.',
            projectTechStack: ['NodeJS', 'Telegram Bot API', 'Dicebear Avatars', 'Coingecko API'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://t.me/DoloresAbernathy7'
        },
        {
            projectImage: require('../assets/projects/OutOfPocket.jpg'),
            projectTitle: 'Out Of Pocket',
            projectDescription: 'An aesthetic minimal expense tracker helping you manage your budget along with expenses. It has graphs to visualize your spending and much more helpful features.',
            projectTechStack: ['Flutter', 'Hive', 'Flutter Icons', 'Flutter Draw Graphs'],  
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/MenenArts.jpg'),
            projectTitle: 'Menen Arts',
            projectDescription: 'A fashion illustration app rich with essential features to design, color, and export custom fashion clothings along with lots of presets to get your design started. Made for Menen Arts Start Up.',
            projectTechStack: ['Flutter', 'Painter', 'Intl', 'AdMob', 'Font Awesome', 'IonIcons'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/Jacosta.jpg'),
            projectTitle: 'Jacosta Bot',
            projectDescription: 'A feature rich telegram bot to help ease some tasks on telegram. It has features like web-screen, QR generator, covid stat tracker, Crypto price checker and much more.',
            projectTechStack: ['NodeJS', 'Telegram Bot API', 'Dicebear Avatars', 'Coingecko API'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/DoloresAbernathy.jpg'),
            projectTitle: 'Dolores Abernathy',
            projectDescription: 'A feature rich telegram bot to help ease some tasks on telegram. It has features like web-screen, QR generator, covid stat tracker, Crypto price checker and much more.',
            projectTechStack: ['NodeJS', 'Telegram Bot API', 'Dicebear Avatars', 'Coingecko API'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://t.me/DoloresAbernathy7'
        },
        {
            projectImage: require('../assets/projects/EthioDatasets.png'),
            projectTitle: 'EthioDatasets',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['ReactJS', 'React Hooks', 'TMDB API', 'Vercel'],
            githubRepo: ' ',
            otherLink: 'https://ethiodatasets.com/'
        },
        {
            projectImage: require('../assets/projects/WordsOfStrangers.png'),
            projectTitle: 'Words Of Strangers',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Vercel'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/TMDB.png'),
            projectTitle: 'The Movie Database',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['ReactJS', 'React Hooks', 'TMDB API', 'Vercel'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/BoxSimulation.jpg'),
            projectTitle: 'Boxes Simulation',
            projectDescription: 'A fashion illustration app rich with essential features to design, color, and export custom fashion clothings along with lots of presets to get your design started. Made for Menen Arts Start Up.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/IAmNinja.jpg'),
            projectTitle: 'I Am Ninja',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['ReactJS', 'React Hooks', 'TMDB API', 'Vercel'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
    ]
    let folderProjects = [
        {
            // projectImage: require('../assets/projects/OutOfPocket.png'),
            projectTitle: 'Astrophile',
            projectDescription: 'An aesthetic minimal expense tracker helping you manage your budget along with expenses. It has graphs to visualize your spending and much more helpful features.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://t.me/DreamIntelligence/72'
        },
        {
            // projectImage: require('../assets/projects/Aurora.png'),
            projectTitle: 'Lexicon',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            // projectImage: require('../assets/projects/WordsOfStrangers.png'),
            projectTitle: 'Cyberpunk Chat',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            // projectImage: require('../assets/projects/Jacosta.png'),
            projectTitle: 'Beautiful OS',
            projectDescription: 'A feature rich telegram bot to help ease some tasks on telegram. It has features like web-screen, QR generator, covid stat tracker, Crypto price checker and much more.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            // projectImage: require('../assets/projects/MenenArts.png'),
            projectTitle: 'Crypto Wallet UI',
            projectDescription: 'A fashion illustration app rich with essential features to design, color, and export custom fashion clothings along with lots of presets to get your design started. Made for Menen Arts Start Up.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            // projectImage: require('../assets/projects/MenenArts.png'),
            projectTitle: 'Python Game Engine',
            projectDescription: 'A fashion illustration app rich with essential features to design, color, and export custom fashion clothings along with lots of presets to get your design started. Made for Menen Arts Start Up.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        
    ]
    return (
        <div id='projects' className='sectionContainer projectContainer'>
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <h2 className='sectionTitle' style={{marginRight: '40px'}}> <span className='linkText'> 03. </span> Projects </h2>
                <div className='horizontalLine' style={{width: '60%'}}></div>
            </div>
            <br></br>
            <div>
                {
                    projects.map((project, index) => {
                        isLeft = !isLeft;
                        return <EachProject projectALignment={isLeft} projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectTechStack={project.projectTechStack} projectGithubRepo={project.githubRepo} projectOtherLink={project.otherLink} key={index} />
                    })
                }
            </div>
            <div className='folderProjects'>
                <h1 style={{color: 'var(--gentle-blue)', marginBottom: '20px'}}> Other Noteworthy Projects </h1>
                {/* <span className='linkText' style={{fontFamily: "'Fira Code', monospace"}}> View the archive </span> */}
                <div className='folderProjectsGrid'>
                    {
                        folderProjects.map((project, index) => {
                            return <FolderProject projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectTechStack={project.projectTechStack} projectGithubRepo={project.githubRepo} projectOtherLink={project.otherLink} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}