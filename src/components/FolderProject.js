import './FolderProject.css';

export const FolderProject = (props) => {
    return (
        <a href={props.projectOtherLink !== "" ? props.projectOtherLink : props.projectGithubRepo } target='_blank' rel="noreferrer">
            <div>
                <div className='sectionContainer folderProjectContainer'>
                    <div className='flexSpaceBetween'>
                        <i className="fa fa-light fa-folder folderIcon"></i>
                        <div>
                        <a href={props.projectGithubRepo} target='_blank' rel="noreferrer">
                                <i className="fa fa-github projectLink" style={{fontSize: '26px'}}></i>
                            </a>
                            <a href={props.projectOtherLink} target='_blank' rel="noreferrer">
                                <i className="fa fa-solid fa-link projectLink"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className='projectTitle'> {props.projectTitle} </h2>
                        <p className='folderProjectDescription'> {props.projectDescription} </p>
                        <ul className='projectTechStack fpts'>
                            {
                                props.projectTechStack.map((tech, index) => {
                                    return <li key={index}> {tech} </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    );
}