import './EachProject.css'

export const EachProject = (props) => {
    let alignLeft = props.projectALignment;
    return (
        <a href={props.projectOtherLink !== "" ? props.projectOtherLink : props.projectGithubRepo } target='_blank' rel="noreferrer">
            <div className='eachProject'>
                {
                    alignLeft === true ? 
                        null :
                        <div>
                            <a href={props.projectOtherLink !== "" ? props.projectOtherLink : props.projectGithubRepo } target='_blank' rel="noreferrer">
                                <img className='projectImage' alt="project" src={props.projectImage}></img>
                            </a>
                        </div>
                }
                <div className={alignLeft === true ? 'projectDetail alignLeft ' : 'projectDetail alignRight imageOverlap'}>
                    <span className='linkText' style={{fontSize: '14px', fontFamily: "'Fira Code', monospace"}}> Featured Project </span>
                    <h1 className='projectTitle'> {props.projectTitle} </h1>
                    <div className='projectDescription'>
                        <p> {props.projectDescription} </p>
                    </div>
                    <ul className='projectTechStack'>
                        {
                            props.projectTechStack.map((tech, index) => {
                                return <li key={index}> {tech} </li>
                            })
                        }
                    </ul>
                    <div>
                        <a href={props.projectGithubRepo} target='_blank' rel="noreferrer">
                            <i className="fa fa-github projectLink" style={{fontSize: '26px'}} ></i>
                        </a>
                        {/* <i className="fa fa-solid fa-share projectLink"></i> */}
                        <a href={props.projectOtherLink} target='_blank' rel="noreferrer">
                            <i className="fa fa-solid fa-link projectLink"></i>
                        </a>
                    </div>
                </div>
                {
                    alignLeft === true ? 
                        <div>
                            <img className='projectImage imageOverlap' alt="project" src={props.projectImage}></img>
                        </div>
                    : null
                }
            </div>
        </a>
    );
}