import { EachProject } from './EachProject';
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
    return (
        <div className='sectionContainer projectContainer'>
            <div className='flexSpaceBetween'>
                <h2 className='sectionTitle'> <span className='linkText'> 03. </span> Projects </h2>
                <div className='horizontalLine'></div>
            </div>
            <br></br>
            <div>
                {
                    projects.map((project, index) => {
                        return <EachProject projectALignment={project.alignLeft} projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} key={index} />
                    })
                }
            </div>
        </div>
    );
}