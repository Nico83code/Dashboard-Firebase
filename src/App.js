import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import CreateProject from "./Components/Projects/CreateProject";
import DashboardOverview from "./Components/Dashboard/DashboardOverview";
import Profile from "./Components/Dashboard/Profile";
import Student from "./Components/Student/Student";
import ListView from "./Components/Listview/ListView";
import { HOME_URL, STORE_URL } from "./Config";

import studentData from "./Data/studentData.json";
import metaData from "./Data/metaData.json";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      studentData: studentData,
      metaData: metaData,
      tableView: {
        filterByStudent: "",
        sortBy: "assignment",
        sortOrder: true,
      },
      charts: {
        difficultyRating: true,
        enjoymentRating: true,
        chartType: true,
      },
      filter: {
        dashboard: [],
      },
    };
    console.log("studentdata", studentData);

    this.handleChartSwitches = this.handleChartSwitches.bind(this);
    this.handleFilterDashboard = this.handleFilterDashboard.bind(this);
    this.handleTableSort = this.handleTableSort.bind(this);
    this.handleTableviewSelect = this.handleTableviewSelect.bind(this);

    this.getAssignmentForStudent = this.getAssignmentForStudent.bind(this);
    this.getAssignmentNames = this.getAssignmentNames.bind(this);
    this.getAssignmentsAverage = this.getAssignmentsAverage.bind(this);
    this.getFilterNames = this.getFilterNames.bind(this);
    this.getFilterState = this.getFilterState.bind(this);
    this.getStudentNames = this.getStudentNames.bind(this);
  }

  // Callback function with active students used in dashboard filter
  getFilterNames() {
    let filterNames = this.state.filter.dashboard;
    let filterState = this.getFilterState();
    if (filterNames.length !== 0) {
      filterNames = filterNames.join(", ").replace(/,([^,]*)$/, " and $1");

      if (filterState[1]) {
        return "Filtered rating includes ALL students";
      }
      return `Filtered rating includes: ${filterNames}`;
    }
    return " ";
  }

  // Callback function with active filter state
  getFilterState(id) {
    const selfFilter = this.state.filter.dashboard.indexOf(id) > -1;
    let allFilter = false;
    if (
      this.state.filter.dashboard === [] ||
      this.state.filter.dashboard.length === this.state.metaData.length
    ) {
      allFilter = true;
    }
    return [selfFilter, allFilter];
  }

  // Update state with currently selected students
  handleFilterDashboard(event, username) {
    event.preventDefault();
    this.setState((state) => {
      const exists = state.filter.dashboard.find((item) => {
        return username === item;
      });
      if (exists === undefined) {
        state.filter.dashboard.push(username);
      } else {
        state.filter.dashboard = state.filter.dashboard.filter((item) => {
          return username !== item;
        });
      }
      return state;
    });
  }

  // Update state with sort column and order for tableview
  handleTableSort(sortBy) {
    this.setState((state) => {
      let sortOrder = state.tableView.sortOrder;
      sortBy !== state.tableView.sortBy && (sortOrder = false);
      state.tableView.sortBy = sortBy;
      state.tableView.sortOrder = !sortOrder;
      return state;
    });
  }

  getStudentNames() {
    const studentData = this.state.studentData;
    let studentNames = [];
    let studentID = 1;
    studentData.forEach((row) => {
      if (
        studentNames.findIndex((index) => index.username === row.username) ===
        -1
      ) {
        studentNames.push({
          id: studentID,
          name: row.username,
          username: row.username,
        });
        studentID++;
      }
    });
    return studentNames.map((row) => {
      return {
        id: row.id,
        name: row.name,
        username: row.username.toLowerCase(),
      };
    });
  }

  // Parse assignment names from student data
  getAssignmentNames() {
    const studentData = this.state.studentData;
    console.log("this state", this.state.studentData);
    let assignments = [];
    const map = new Map();
    for (const item of studentData) {
      if (!map.has(item.assignment)) {
        map.set(item.assignment, true);
        assignments.push({ assignment: item.assignment });
      }
    }
    return assignments;
  }

  // Calculate average assignment difficulty and enjoyment
  //   ratings for all students
  getAssignmentsAverage() {
    let studentData = this.state.studentData;
    const dashboardFilter = this.state.filter.dashboard;
    let assignments = this.getAssignmentNames();
    let assignmentsWithData = assignments.map((a) => {
      let data = {};
      if (dashboardFilter.length !== 0) {
        data = studentData.filter((s) => {
          return (
            a.assignment === s.assignment &&
            dashboardFilter.indexOf(s.username.toLowerCase()) > -1
          );
        });
      } else {
        data = studentData.filter((s) => {
          return a.assignment === s.assignment;
        });
      }
      const count = data.length;
      let difficultyRating = data
        .map((d) => {
          return parseInt(d.difficultyRating);
        })
        .reduce((a, b) => a + b, 0);
      difficultyRating = Math.round(difficultyRating / count);
      let enjoymentRating = data
        .map((e) => {
          return parseInt(e.enjoymentRating);
        })
        .reduce((a, b) => a + b, 0);
      enjoymentRating = Math.round(enjoymentRating / count);
      return {
        assignment: a.assignment,
        difficultyRating: difficultyRating,
        enjoymentRating: enjoymentRating,
      };
    });
    return assignmentsWithData;
  }

  // Calculate average assignment difficulty and enjoyment ratings
  //   for one student (modified version of getAssignmentsAverage)
  getAssignmentForStudent(props) {
    const { student } = props;
    const studentData = this.state.studentData;
    let assignments = this.getAssignmentNames(studentData);
    let assignmentsWithData = assignments.map((a) => {
      let data = studentData.filter((s) => {
        return (
          a.assignment === s.assignment && student === s.username.toLowerCase()
        );
      });
      return {
        assignment: a.assignment,
        difficultyRating: parseInt(data[0].difficultyRating),
        enjoymentRating: parseInt(data[0].enjoymentRating),
      };
    });
    return assignmentsWithData;
  }

  // Update state with selected student for tableview
  handleTableviewSelect(event) {
    event.preventDefault();
    const student = event.target.value;
    this.setState((state) => {
      state.tableView.filterByStudent = student;
      return state;
    });
  }

  // Update state with chartType, difficultyRating and enjoymentRating
  handleChartSwitches(event, chartSwitch) {
    event.preventDefault();
    this.setState((state) => {
      if (chartSwitch === "") {
        state.charts.chartType = !state.charts.chartType;
        return state;
      }
      if (chartSwitch) {
        state.charts.difficultyRating = !state.charts.difficultyRating;
        if (
          state.charts.difficultyRating === false &&
          state.charts.enjoymentRating === false
        ) {
          state.charts.enjoymentRating = true;
        }
      } else {
        state.charts.enjoymentRating = !state.charts.enjoymentRating;
        if (
          state.charts.enjoymentRating === false &&
          state.charts.difficultyRating === false
        ) {
          state.charts.difficultyRating = true;
        }
      }
      return state;
    });
  }

  render() {
    const chartType = this.state.charts.chartType;
    const difficultyRating = this.state.charts.difficultyRating;
    const enjoymentRating = this.state.charts.enjoymentRating;
    const filterByStudent = this.state.tableView.filterByStudent;
    const metaData = this.state.metaData;
    const studentData = this.state.studentData;
    const tableView = this.state.tableView;

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardOverview} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
          <Route exact path={HOME_URL}>
            <DashboardOverview
              chartType={chartType}
              difficultyRating={difficultyRating}
              enjoymentRating={enjoymentRating}
              getAssignmentsAverage={this.getAssignmentsAverage}
              getFilterNames={this.getFilterNames}
              getFilterState={this.getFilterState}
              getStudentNames={this.getStudentNames}
              handleChartSwitches={this.handleChartSwitches}
              handleFilterDashboard={this.handleFilterDashboard}
              metaData={metaData}
              studentData={studentData}
            />
          </Route>
          <Route exact path={`${HOME_URL}${STORE_URL}`}>
            <ListView
              filterByStudent={filterByStudent}
              getStudentNames={this.getStudentNames}
              handleTableSort={this.handleTableSort}
              handleTableviewSelect={this.handleTableviewSelect}
              studentData={studentData}
              tableView={tableView}
            />
          </Route>
          <Route
            exact
            path={`${HOME_URL}${STORE_URL}/id/:id/username/:username`}
          >
            <ListView
              filterByStudent={filterByStudent}
              getStudentNames={this.getStudentNames}
              handleTableSort={this.handleTableSort}
              handleTableviewSelect={this.handleTableviewSelect}
              studentData={studentData}
              tableView={tableView}
            />
          </Route>
          <Route exact path={`${HOME_URL}/id/:id/username/:username`}>
            <Student
              chartType={chartType}
              difficultyRating={difficultyRating}
              enjoymentRating={enjoymentRating}
              getAssignmentForStudent={this.getAssignmentForStudent}
              getStudentNames={this.getStudentNames}
              handleChartSwitches={this.handleChartSwitches}
              metaData={metaData}
            />
          </Route>
          <Redirect from="/" to={HOME_URL} />
        </Switch>
      </Router>
    );
  }
}

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Switch>

//           <Route exact path="/" component={DashboardOverview} />
//           <Route path="/profile" component={Profile} />
//           <Route path="/dashboard" component={Dashboard} />
//           <Route path="/project/:id" component={ProjectDetails} />
//           <Route path="/signin" component={SignIn} />
//           <Route path="/signup" component={SignUp} />
//           <Route path="/create" component={CreateProject} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
