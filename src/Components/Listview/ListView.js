import React from "react";
import { useParams } from "react-router-dom";
import RenderList from "./RenderList";
import Sort from "../Sorting/Sort";

const ListView = (props) => {
  const params = useParams();
  const {
    filterByStudent,
    getStudentNames,
    handleTableSort,
    handleTableviewSelect,
    studentData,
    ListView,
  } = props;

  // choose default student ...
  const studentNames = getStudentNames();
  let student = studentNames[0];

  // but change to username from URL is available ...
  if (params.username !== undefined) {
    student = studentNames.find((student) => {
      return student.username === params.username;
    });
  }

  // except when username is already set by state!
  if (filterByStudent !== "") {
    student = studentNames.find((student) => {
      return student.username === filterByStudent.toLowerCase();
    });
  }

  // filter data for student and sort
  let studentDataFiltered = studentData.filter((row) => {
    return student.username === row.username.toLowerCase();
  });
  studentDataFiltered = Sort(
    studentDataFiltered,
    ListView.sortOrder,
    ListView.sortBy
  );

  const urlToStudent = (
    <li>
      <a
        href={`/dashboard/students/id/${student.id}/username/${student.username}`}
      >
        {student.name}
      </a>
    </li>
  );

  return (
    <main>
      <header>
        <h1>Table view</h1>
      </header>
      <RenderList
        handleTableSort={handleTableSort}
        handleTableviewSelect={handleTableviewSelect}
        student={student}
        studentDataFiltered={studentDataFiltered}
        studentNames={studentNames}
        ListView={ListView}
      />
    </main>
  );
};

export default ListView;
