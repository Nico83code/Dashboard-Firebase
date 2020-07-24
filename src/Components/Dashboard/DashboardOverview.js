import React from "react";
import "../../App.css";
import SubjectData from "../../Data/SubjectData";

function DashboardOverview() {
  return (
    <div className="dbcontainer">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Dashboard Overview</span>
          <SubjectData/>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
