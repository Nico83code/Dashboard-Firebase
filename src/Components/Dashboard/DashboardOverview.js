import React from "react";
import "../../App.css";
import SubjectData from "../../Data/SubjectData";
import Students from "../Student/Students";

function DashboardOverview() {
  return (
    <div className="dbcontainer">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Dashboard Overview</span>
          <SubjectData/>
          <Students/>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
