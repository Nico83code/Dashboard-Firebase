import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <div className="project-list section">
        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>
              Post by {project.authorFirstName} {project.authorLastName}
            </p>
            <p className="grey-text">
              {moment(project.createAt.toDate()).calendar()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
