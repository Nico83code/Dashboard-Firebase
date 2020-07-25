import React, { useState, useEffect } from "react";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryLabel,
} from "victory";

function StudentChart(props) {
  const apiUrl = "https://dashboard-e5b12.firebaseio.com/subDB.json";
  const [data, setData] = useState();
  const [difficultyOnOFF, setDifficultyOnOFF] = useState(false);
  const [enjoymentRateOnOFF, setEnjoymentRateOnOFF] = useState(false);
  const [showDifficultyRateChart, setShowDifficultyRateChart] = useState(true);
  const [showEnjoymentRateChart, setShowEnjoymentRateChart] = useState(true);

  const getData = async () => {
    try {
      let response = await fetch(apiUrl, {
        method: "GET",
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect((event) => {
    getData(event);
  }, []);

  if (!data) return "loading";

  const allAssignments = data.map((data) => data.assignment);
  const allUniqueAssignments = [...new Set(allAssignments)];
 
  const objectStateData = data.map((object) => ({
    Name: object.name,
    Assignment: object.assignment,
    Difficulty: parseInt(object.difficultyRating), 
    Fun: parseInt(object.enjoymentRating),
  }));
 
  const DataIndividualStudent = objectStateData.filter(
    (item) => item.Name === props.newNames
  );
  console.log(DataIndividualStudent);


  const getAverageResult = (Assignment, typeOfResult) => {
    const filterData = objectStateData
      .filter((item) => item.Assignment === Assignment)
      .map((result) => result[typeOfResult]);
    // Average
    const averageResult =
      filterData.reduce((a, b) => a + b, 0) / filterData.length; 
    return averageResult;
  };

  
  const allStudentsRatingAverage = allUniqueAssignments.map((Assignment) => ({
    Assignment: Assignment,
    Difficulty: getAverageResult(Assignment, "Difficulty"),
    Fun: getAverageResult(Assignment, "Fun"),
  }));

  const toggleDifficultyButton = () => {
    setDifficultyOnOFF(!difficultyOnOFF);
  };
  const toggleEnjoymentButton = () => {
    setEnjoymentRateOnOFF(!enjoymentRateOnOFF);
  };

  const handleChangeDifficultyRate = (event) => {
    event.preventDefault();
    toggleDifficultyButton();
    setShowDifficultyRateChart(!showDifficultyRateChart);
  };

  const handleChangeEnjoymentRate = (event) => {
    event.preventDefault();
    toggleEnjoymentButton();
    setShowEnjoymentRateChart(!showEnjoymentRateChart);
  };

  return (
    <div className="dbcontainer">
      <div className="card z-depth-0">
        <div className="card-content">
          {/* <span className="card-title">Indiviual</span> */}

          <button
          id="DifficultyRate"
          value="DifficultyRate"
          onClick={(event) => handleChangeDifficultyRate(event)}
        >
          Filter: Difficulty Rating |{" "}
          {difficultyOnOFF ? <span>On</span> : <span>Off</span>}
        </button>

        <button
          id="EnjoymentRate"
          value="EnjoymentRate"
          onClick={(event) => handleChangeEnjoymentRate(event)}
        >
          Filter: EnjoymentRating |{" "}
          {enjoymentRateOnOFF ? <span>On</span> : <span>Off</span>}
        </button>

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
                  data={DataIndividualStudent}
                  x="Assignment"
                  y="Difficulty"
                  style={{ data: { fill: "#f2ba0d" } }}
                />
              ) : null}
              {showEnjoymentRateChart ? (
                <VictoryBar
                  id="EnjoymentRateBar"
                  value="true"
                  labelComponent={<VictoryTooltip />}
                  data={DataIndividualStudent}
                  x="Assignment"
                  y="Fun"
                  style={{ data: { fill: "#F27F0D" } }}
                />
              ) : null}
            </VictoryGroup>
            <VictoryAxis
              tickValues={[0]}
              tickLabelComponent={
                <VictoryLabel angle={40} textAnchor="start" />
              }
            />
            <VictoryAxis dependentAxis />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}

export default StudentChart;
