import React from "react";

function Chart(props) {
  const data = props.data;
  const subjectData = data.map((item) => ({
    assignment: item.assignment,
    difficultyRating: item.difficultyRating,
    enjoymentRating: item.enjoymentRating,
    label: `Assignment ${item.assignment}, Difficulty: ${item.difficultyRating}, Enjoyment: ${item.enjoymentRating}`,
  }));
  console.log(subjectData);
  const handleChange = (event, chartSwitch) => {
    event.preventDefault();
    console.log("clicked");
  };
  return <div></div>;
}
export default Chart;
