import React, { useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryLabel,
} from "victory";

function AverageRating(props) {
  const [fetchData, setFetchData] = useState(props.data);

  const getAssignmentNames = () => {
    const studentData = fetchData;
    let assignments = [];
    const map = new Map();
    for (const item of studentData) {
      if (!map.has(item.assignment)) {
        map.set(item.assignment, true);
        assignments.push({ assignment: item.assignment });
      }
    }
    return assignments;
  };
console.log(getAssignmentNames())


  const handleChange = (event, chartSwitch) => {
    event.preventDefault();
    console.log("click");

  };

  return (
    <div>
      <div>
        <button onClick={(event) => handleChange(event, true)}>
          Difficulty Rating <span>on</span> : <span>off</span>
        </button>

        <button onClick={(event) => handleChange(event, false)}>
          EnjoymentRating <span>on</span> : <span>off</span>
        </button>
        <button onClick={(event) => handleChange(event, "")}>
          Chart <span>on</span> : <span>off</span>
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
            labelComponent={<VictoryTooltip />}
            data={fetchData}
            x="assignment"
            y="difficultyRating"
            tickValues={[1, 2, 3, 4, 5]}
            alignment="start"
            color="#f2ba0d"
          />

          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={fetchData}
            x="assignment"
            y="enjoymentRating"
            tickValues={[1, 2, 3, 4, 5]}
            alignment="start"
            color="#F27F0D"
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignment}
          tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>

      <h2>Difficulty Rating</h2>
      <VictoryChart
        domainPadding={6}
        width={1200}
        height={400}
        padding={{ top: 20, bottom: 160, left: 60, right: 150 }}
      >
        <VictoryGroup offset={8}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={fetchData}
            x="assignment"
            y="difficultyRating"
            tickValues={[1, 2, 3, 4, 5]}
            alignment="start"
            color="#f2ba0d"
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignment}
          tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>

      <h2>Enjoyment Rating</h2>
      <VictoryChart
        domainPadding={6}
        width={1200}
        height={400}
        padding={{ top: 20, bottom: 160, left: 60, right: 150 }}
      >
        <VictoryGroup offset={8}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={fetchData}
            x="assignment"
            y="enjoymentRating"
            tickValues={[1, 2, 3, 4, 5]}
            alignment="start"
            color="#F27F0D"
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignment}
          tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </div>
  );
}
export default AverageRating;
