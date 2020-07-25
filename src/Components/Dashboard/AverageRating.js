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
  const [toggleTrueFales, setToggleTrueFales] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState("");
  const [filterEnjoymentRate, setFilterEnjoymentRate] = useState("");
  const [filterChart, setFilterChart] = useState("");
  const [showDifficultyRateChart, setShowDifficultyRateChart] = useState(true);
  const [showEnjoymentRateChart, setShowEnjoymentRateChart] = useState(true);
  const [showLineChart, setShowLineChart] = useState(true);

  
  const allAssignments = data.map((data) => data.assignment);
  const filterAssignmentName = [...new Set(allAssignments)];


  const objectStateData = data.map((object) => ({
    Name: object.name,
    Assignment: object.assignment,
    DifficultyRate: parseInt(object.difficultyRating), 
    EnjoymentRate: parseInt(object.enjoymentRating),
  }));

  
  const getAverageResult = (assignment, typeOfResult) => {
    const filterData = objectStateData
      .filter((item) => item.Assignment === assignment)
      .map((result) => result[typeOfResult]);
    // Average
    const averageResult =
      filterData.reduce((a, b) => a + b, 0) / filterData.length;
    return averageResult;
  };


  const allStudentsRatingAverage = filterAssignmentName.map((assignment) => ({
    Assignment: assignment,
    DifficultyRate: getAverageResult(assignment, "DifficultyRate"),
    EnjoymentRate: getAverageResult(assignment, "EnjoymentRate"),
  }));

  const toggle = () => {
    setToggleTrueFales(!toggleTrueFales);
  };

  const handleChangeDifficultyRate = (event) => {
    event.preventDefault();
    toggle();
    setShowDifficultyRateChart(!showDifficultyRateChart);
  };

  const handleChangeEnjoymentRate = (event) => {
    event.preventDefault();
    toggle();
    setShowEnjoymentRateChart(!showEnjoymentRateChart);
  };

  const handleChangeChart = (event) => {
    event.preventDefault();
    toggle();
    setShowLineChart(!showLineChart);
  };

  const renderBarChart = () => {
    return (
      <VictoryChart
        domainPadding={6}
        width={1200}
        height={400}
        padding={{ top: 20, bottom: 160, left: 60, right: 150 }}
      >
        <VictoryGroup offset={8}>
          {showDifficultyRateChart ? (
            <VictoryBar
              id="DifficultyRateBar"
              value="true"
              labelComponent={<VictoryTooltip />}
              data={allStudentsRatingAverage}
              x="Assignment"
              y="DifficultyRate"
              style={{ data: { fill: "#f2ba0d" } }}
            />
          ) : null}

          {showEnjoymentRateChart ? (
            <VictoryBar
              id="EnjoymentRateBar"
              value="true"
              labelComponent={<VictoryTooltip />}
              data={allStudentsRatingAverage}
              x="Assignment"
              y="EnjoymentRate"
              style={{ data: { fill: "#F27F0D" } }}
            />
          ) : null}
        </VictoryGroup>
        <VictoryAxis
          tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    );
  };

  const renderLineChart = () => {
    return (
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
          tickValues={[0]}
          tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    );
  };

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
          onClick={(event) => handleChangeEnjoymentRate(event)}
        >
          EnjoymentRating |{" "}
          {toggleTrueFales ? <span>On</span> : <span>Off</span>}
        </button>

        <button onClick={(event) => handleChangeChart(event)}>
          Chart | {toggleTrueFales ? <span>Bar</span> : <span>Chart</span>}
        </button>
      </div>
      <h2>Average Rating</h2>

      {showLineChart ? renderBarChart() : renderLineChart()}
    </div>
  );
}
export default AverageRating;
