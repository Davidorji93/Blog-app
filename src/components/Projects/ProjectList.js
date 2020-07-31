import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section mt-5">
            {projects &&
                projects.map(project =>{
                    return <ProjectSummary project={project} key={project.id} />
                }
            )}
            
        </div>
    );
};

export default ProjectList;