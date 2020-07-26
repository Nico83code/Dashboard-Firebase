import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import ListCard from "./ListCard";
import "../../App.css";

function ListOverview(props) {
  const apiUrl = "https://dashboard-e5b12.firebaseio.com/subDB.json";
  const [subData, setSubData] = useState();
  const [sorting, setSorting] = useState("All");

  const getSubData = async () => {
    try {
      let response = await fetch(apiUrl, {
        method: "GET",
      });
      const result = await response.json();
      console.log(result);
      setSubData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect((event) => {
    getSubData(event);
  }, []);

  const { auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (!subData) return "loading";

  const onChangeSort = (event) => {
    setSorting(event.target.value);
  };

  const newArray =
    sorting === "all"
      ? //filter name
        subData
      : sorting === "Helena"
      ? subData.filter((data) => data.name === "Helena")
      : sorting === "Marco"
      ? subData.filter((data) => data.name === "Marco")
      : sorting === "Nico"
      ? subData.filter((data) => data.name === "Nico")
      : sorting === "Peter"
      ? subData.filter((data) => data.name === "Peter")
      : sorting === "Kasper"
      ? subData.filter((data) => data.name === "Kasper")
      : sorting === "Cindy"
      ? subData.filter((data) => data.name === "Cindy")
      : sorting === "Eldin"
      ? subData.filter((data) => data.name === "Eldin")
      : sorting === "Rick"
      ? subData.filter((data) => data.name === "Rick")
      : sorting === "Wulfert"
      ? subData.filter((data) => data.name === "Wulfert")
      : sorting === "Aron"
      ? subData.filter((data) => data.name === "Aron")
      : sorting === "difficultyRating 1-5"
      ? subData.sort((a, b) =>
          a.difficultyRating > b.difficultyRating ? 1 : -1
        )
      : sorting === "difficultyRating 5-1"
      ? subData.sort((a, b) =>
          b.difficultyRating > a.difficultyRating ? 1 : -1
        )
      : sorting === "enjoymentRating 1-5"
      ? subData.sort((a, b) => (a.enjoymentRating > b.enjoymentRating ? 1 : -1))
      : sorting === "enjoymentRating 5-1"
      ? subData.sort((a, b) => (b.enjoymentRating > a.enjoymentRating ? 1 : -1))
      : subData;

  return (
    <div className="dbcontainer">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">List overview</span>
          <div>
            <label for="cars">Filter By Student</label>
            <select onChange={onChangeSort}>
              <option value="all">All</option>
              <option value="Helena">Helena</option>
              <option value="Marco">Marco</option>
              <option value="Nico">Nico</option>
              <option value="Peter">Peter</option>
              <option value="Kasper">Kasper</option>
              <option value="Cindy">Cindy</option>
              <option value="Eldin">Eldin</option>
              <option value="Rick">Rick</option>
              <option value="Wulfert">Wulfert</option>
              <option value="Aron">Aron</option>
              <option value="difficultyRating 1-5">
                Difficulty Rating 1-5
              </option>
              <option value="difficultyRating 5-1">
                Difficulty Rating 5-1
              </option>
              <option value="enjoymentRating 1-5">Enjoyment Rating 1-5</option>
              <option value="enjoymentRating 5-1">Enjoyment Rating 5-1</option>
            </select>
          </div>

          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Assignment</th>
                <th>Difficulty</th>
                <th>Enjoyment</th>
                <th></th>
              </tr>
            </tbody>
          </table>

          {newArray
            ? newArray.map((data) => (
                <ListCard
                  key={data.id}
                  name={data.name}
                  assignment={data.assignment}
                  difficultyRating={data.difficultyRating}
                  enjoymentRating={data.enjoymentRating}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect()
)(ListOverview);
