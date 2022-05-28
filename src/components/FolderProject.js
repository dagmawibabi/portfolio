import './FolderProject.css';

export const FolderProject = () => {
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
                    <h2 className='projectTitle'> Project One</h2>
                    <p className='folderProjectDescription'> Building a custom multisite compatible WordPress plugin to build global search with Algolia </p>
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