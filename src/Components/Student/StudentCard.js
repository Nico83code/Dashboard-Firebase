import React from "react";
import { Link } from "react-router-dom";

function StudentCard(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Link to={`/Students/${props.name}`}>{props.name}</Link>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default StudentCard;
