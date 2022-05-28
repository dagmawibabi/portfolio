import './EachProject.css'

export const EachProject = (props) => {
    let alignLeft = props.projectALignment;
    return (
        <div className='eachProject'>
            {
                alignLeft === true ? 
                    null :
                    <div>
                        <img className='projectImage' alt="project" src={props.projectImage}></img>
                    </div>
            }
            <div className={alignLeft === true ? 'projectDetail alignLeft ' : 'projectDetail alignRight imageOverlap'}>
                <span className='linkText' style={{fontSize: '14px'}}> Featured Project </span>
                <h1 className='projectTitle'> {props.projectTitle} </h1>
                <div className='projectDescription'>
                    <p> {props.projectDescription} </p>
                </div>
                <ul className='projectTechStack'>
                    <li> Tech 1 </li>
                    <li> Tech 2 </li>
                    <li> Tech 3 </li>
                    <li> Tech 4 </li>
                    <li> Tech 5 </li>
                </ul>
                <div>
                    <i className="fa fa-github projectLink" style={{fontSize: '26px'}}></i>
                    {/* <i className="fa fa-solid fa-share projectLink"></i> */}
                    <i className="fa fa-solid fa-link projectLink"></i>
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
    );
}