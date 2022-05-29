import { EachProject } from './EachProject';
import { FolderProject } from './FolderProject';
import './Projects.css'

export const Projects = () => {
    let projects = [
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project One',
            projectDescription: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            alignLeft: true
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Two',
            projectDescription: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            alignLeft: false
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Three',
            projectDescription: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            alignLeft: true
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Four',
            projectDescription: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            alignLeft: false
        },
    ]
    let folderProjects = [
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project One',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: true
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Two',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: false
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Three',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: true
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Four',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: false
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project One',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: true
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Two',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: false
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Three',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: true
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Four',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: false
        },
        {
            projectImage: require('../assets/projects/project.jpeg'),
            projectTitle: 'Project Four',
            projectDescription: 'The third iteration of my personal website built with React and hosted on Vercel.',
            alignLeft: false
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
                        return <EachProject projectALignment={project.alignLeft} projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} key={index} />
                    })
                }
            </div>
            <div className='folderProjects'>
                <h1 style={{color: 'var(--gentle-blue)', marginBottom: '20px'}}> Other Noteworthy Projects </h1>
                <span className='linkText'> View the archive </span>
                <div className='folderProjectsGrid'>
                    {
                        folderProjects.map((project, index) => {
                            return <FolderProject projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}