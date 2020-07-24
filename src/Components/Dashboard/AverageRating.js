import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryLabel,
} from "victory";

function AverageRating(props) {
  const data = props.data;
  const subjectData = data.map((item) => ({
    assignment: item.assignment,
    difficultyRating: item.difficultyRating,
    enjoymentRating: item.enjoymentRating,
    label: `Assignment ${item.assignment}, Difficulty: ${item.difficultyRating}, Enjoyment: ${item.enjoymentRating}`,
  }));
  console.log(subjectData);

  return (
    <div>
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
            data={subjectData}
            x="assignment"
            y="difficultyRating"
            tickValues={[1, 2, 3, 4, 5]}
            barRatio={3}
            alignment="start"
            color="#f2ba0d"
          />

          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={subjectData}
            x="assignment"
            y="enjoymentRating"
            tickValues={[1, 2, 3, 4, 5]}
            barRatio={3}
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
