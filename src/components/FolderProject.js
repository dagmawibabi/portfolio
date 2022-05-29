import './FolderProject.css';

export const FolderProject = (props) => {
    return (
        <div>
            <div className='sectionContainer folderProjectContainer'>
                <div className='flexSpaceBetween'>
                    <i className="fa fa-light fa-folder folderIcon"></i>
                    <div>
                        <i className="fa fa-github projectLink" style={{fontSize: '26px'}}></i>
                        <i className="fa fa-solid fa-link projectLink"></i>
                    </div>
                </div>
                <div>
                    <h2 className='projectTitle'> {props.projectTitle} </h2>
                    <p className='folderProjectDescription'> {props.projectDescription} </p>
                    <ul className='projectTechStack fpts'>
                        <li> Tech 1 </li>
                        <li> Tech 2 </li>
                        <li> Tech 3 </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}