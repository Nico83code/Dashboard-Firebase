import React, { useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryLabel,
  VictoryLine,
} from "victory";

function AverageRating(props) {
  const [data, setData] = useState(props.data);
  const [toggleTrueFales, setToggleTrueFales] = useState(true);
  const [filterDifficulty, setFilterDifficulty] = useState("");
  const [filterEnjoymentRate, setFilterEnjoymentRate] = useState("");
  const [filterChart, setFilterChart] = useState("");

  // 1. All Assignments in Array
  const allAssignments = data.map((data) => data.assignment);
  const filterAssignmentName = [...new Set(allAssignments)];

  // 2. Object of items
  const objectStateData = data.map((object) => ({
    Name: object.name,
    Assignment: object.assignment,
    DifficultyRate: parseInt(object.difficultyRating), // The parseInt() function parses a string argument and returns an integer of the specified radix
    EnjoymentRate: parseInt(object.enjoymentRating),
  }));

  // 3. Function result FUN and Difficulty
  const getAverageResult = (assignment, typeOfResult) => {
    const filterData = objectStateData
      .filter((item) => item.Assignment === assignment)
      .map((result) => result[typeOfResult]);
    // Average
    const averageResult =
      filterData.reduce((a, b) => a + b, 0) / filterData.length; // ex. const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    return averageResult;
  };

  //4. Data with Average result
  const allStudentsRatingAverage = filterAssignmentName.map((assignment) => ({
    Assignment: assignment,
    DifficultyRate: getAverageResult(assignment, "DifficultyRate"),
    EnjoymentRate: getAverageResult(assignment, "EnjoymentRate"),
  }));

  console.log(allStudentsRatingAverage);

  const toggle = () => {
    setToggleTrueFales(!toggleTrueFales);
  };

  const handleChangeDifficultyRate = (event) => {
    event.preventDefault();
    toggle();
    console.log("click");
    console.log(event);
    console.log(event.target.id);
  };
  const handleChangeEnjoymentRate = (event) => {
    event.preventDefault();
    toggle();
    console.log("click");
  };
  const handleChangeChart = (event) => {
    event.preventDefault();
    toggle();
    console.log("click");
  };

  // const newArray =
  //   filterDifficulty === "all"
  //     ? //filter name
  //       allStudentsRatingAverage
  //     : filterDifficulty === "Helena"
  //     ? allStudentsRatingAverage.filter((data) => data.name === "Helena")
  //     : allStudentsRatingAverage;

  return (
    <div>
      <div>
        <button
          id="DifficultyRate"
          value="DifficultyRate"
          onClick={(event) => handleChangeDifficultyRate(event)}
        >
          Difficulty Rating |{" "}
          {toggleTrueFales ? <span>On</span> : <span>Off</span>}
        </button>

        <button
          id="EnjoymentRate"
          value="EnjoymentRate"
          onClick={(event) => handleChangeEnjoymentRate(event, false)}
        >
          EnjoymentRating |{" "}
          {toggleTrueFales ? <span>On</span> : <span>Off</span>}
        </button>
        <button onClick={(event) => handleChangeChart(event, "")}>
          Chart | {toggleTrueFales ? <span>On</span> : <span>Off</span>}
        </button>
      </div>
      <h2>Average Rating</h2>
      <VictoryChart
        domainPadding={6}
        width={1200}
        height={400}
        padding={{ top: 20, bottom: 160, left: 60, right: 150 }}
      >
        <VictoryGroup offset={8}>
          <VictoryBar
            id="DifficultyRateBar"
            value="true"
            labelComponent={<VictoryTooltip />}
            data={allStudentsRatingAverage}
            x="Assignment"
            y="DifficultyRate"
            style={{ data: { fill: "#f2ba0d" } }}
          />

          <VictoryBar
            id="EnjoymentRateBar"
            value="true"
            labelComponent={<VictoryTooltip />}
            data={allStudentsRatingAverage}
            x="Assignment"
            y="EnjoymentRate"
            style={{ data: { fill: "#F27F0D" } }}
          />
        </VictoryGroup>
        <VictoryAxis
          tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
      //line chart
      <VictoryChart
        domainPadding={6}
        width={1200}
        height={400}
        padding={{ top: 20, bottom: 160, left: 60, right: 150 }}
      >
        <VictoryLine
          style={{
            data: { stroke: "#f2ba0d" },
          }}
          labelComponent={<VictoryTooltip />}
          data={allStudentsRatingAverage}
          x="Assignment"
          y="DifficultyRate"
        />

        <VictoryLine
          style={{
            data: { stroke: "#F27F0D" },
          }}
          labelComponent={<VictoryTooltip />}
          data={allStudentsRatingAverage}
          x="Assignment"
          y="EnjoymentRate"
        />

        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </div>
  );
}
export default AverageRating;
