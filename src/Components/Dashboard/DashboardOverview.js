import React from "react";
import { Link } from "react-router-dom";
import DashboardCharts from "./DashboardCharts";
import Sorting from "../Sorting/Sort";

import { HOME_URL, STORE_URL, STORE_LABEL, STUDENTS_LABEL } from "../../Config";

const Dashboard = (props) => {
  const {
    chartType,
    difficultyRating,
    enjoymentRating,
    getAssignmentsAverage,
    getFilterNames,
    getFilterState,
    getStudentNames,
    handleChartSwitches,
    handleFilterDashboard,
    metaData,
  } = props;

  const studentList = Sorting(getStudentNames(), true, "username");

  let listElements = [];
  listElements = studentList.map((row) => {
    let studentData = metaData.find((meta) => {
      return parseInt(meta.id) === row.id;
    });

    const urlToStudent = `${HOME_URL}/id/${row.id}/username/${row.username}`;
    const urlToTable = `${HOME_URL}${STORE_URL}/id/${row.id}/username/${row.username}`;

    const filterState = getFilterState(row.username);
    const filterStudentState = filterState[0];
    const filterAllState = filterState[1];

    // Tenary logic for rendering student selection display
    return (
      <li
        key={row.id}
        className={
          filterStudentState ? (filterAllState ? "dimmed" : null) : null
        }
      >
        <Link to={urlToStudent}>
          {row.name} {studentData.name}
        </Link>
        <button
          className={filterStudentState ? "checkBox" : "checkBox gray"}
          onClick={(event) => handleFilterDashboard(event, row.username)}
        >
          filter {filterStudentState ? <span>on</span> : <span>off</span>}
        </button>

        <Link to={urlToTable}>{STORE_LABEL}</Link>
      </li>
    );
  });

  return (
    <main>
      <DashboardCharts
        chartType={chartType}
        difficultyRating={difficultyRating}
        enjoymentRating={enjoymentRating}
        getAssignmentsAverage={getAssignmentsAverage}
        getFilterNames={getFilterNames}
        handleChartSwitches={handleChartSwitches}
      />

      <header>
        <h1>{STUDENTS_LABEL}</h1>
      </header>
      <ul>{listElements}</ul>
    </main>
  );
};

export default Dashboard;
