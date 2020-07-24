import React from "react";
import { useParams, Link } from "react-router-dom";
import StudentChart from "./StudentChart";
import { HOME_URL, STORE_URL, STORE_LABEL } from "../../Config";

const Student = (props) => {
  const { username, id } = useParams();
  const {
    chartType,
    difficultyRating,
    enjoymentRating,
    getAssignmentForStudent,
    getStudentNames,
    handleChartSwitches,
    metadata,
  } = props;

  const studentNames = getStudentNames();

  let student = studentNames.find((student) => {
    return student.id === parseInt(id);
  });

  const studentData = metadata.find((row) => {
    return student.id === parseInt(row.id);
  });

  let tableData = [];
  let keyID = 0;
  let lastName = "";

  const urlToStudent = (
    <li>
      <a
        className="active"
        href={`${HOME_URL}/id/${student.id}/username/${student.username}`}
      >
        {student.name}
      </a>
    </li>
  );
  const urlToTable = `${HOME_URL}${STORE_URL}/id/${student.id}/username/${student.username}`;

  for (let [key, value] of Object.entries(studentData)) {
    keyID++;
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    if (key === "name") {
      tableData.push(
        <tr key={keyID}>
          <td>Name</td>
          <td>
            {student.name} {value}
          </td>
        </tr>
      );
      lastName = value;
    } else if (key === "email") {
      tableData.push(
        <tr key={keyID}>
          <td>{label}</td>
          <td>
            <a href={`mailto:${value}`}>{value}</a>
          </td>
        </tr>
      );
    } else if (key !== "id") {
      tableData.push(
        <tr key={keyID}>
          <td>{label}</td>
          <td>{value}</td>
        </tr>
      );
    }
  }

  return (
    <main>
      <header>
        <h1>
          {student.name} {lastName}
        </h1>
      </header>
      <StudentChart
        chartType={chartType}
        difficultyRating={difficultyRating}
        enjoymentRating={enjoymentRating}
        getAssignmentForStudent={getAssignmentForStudent}
        handleChartSwitches={handleChartSwitches}
        urlToTable={urlToTable}
        username={username}
      />

      <table className="studentTable">
        <thead>
          <tr className="skip">
            <th colSpan="2">
              <h2>Student Details</h2>
            </th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>

      <Link className="toTableview" to={urlToTable}>
        List view
      </Link>
    </main>
  );
};

export default Student;
