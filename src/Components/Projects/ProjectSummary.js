import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <div className="project-list section">
        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Post by NM</p>
            <p className="grey-text">22 july, 12.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
