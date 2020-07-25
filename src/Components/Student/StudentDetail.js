import React from "react";
import StudentChart from "./StudentChart";

function StudentDetail(props) {
  console.log(props);
  return (
    <div className="dbcontainer">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Student {props.match.params.id} </span>
          {/* <span className="card-title">Result {props.match.params.id} Yellow=Fun Blue=Difficulty</span> */}
          <StudentChart newNames={props.match.params.id} />
        </div>
      </div>
    </div>
  );
}
export default StudentDetail;
