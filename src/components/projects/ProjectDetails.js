import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className=" card-title">Project Title - {id}</span>
                    <p>Well we had a tough time gettin' out of our end.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Rising Phoenix</div>
                    <div>October 7th, 2021 at 10:22AM</div>
                </div>
            </div>
            
        </div>
    )
}
export default ProjectDetails