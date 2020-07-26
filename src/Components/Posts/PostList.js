import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";

const PostList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return (
            <Link to={`./project/${project.id}`} key={project.id}>
              <PostSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
