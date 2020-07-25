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
  // 1. All Assignments in Array
  const allAssignments = data.map((data) => data.assignment);
  const allUniqueAssignments = [...new Set(allAssignments)];
  // console.log(allUniqueAssignments);

  // 2. Object of items
  const objectStateData = data.map((object) => ({
    Name: object.name,
    Assignment: object.assignment,
    Difficulty: parseInt(object.difficultyRating), // The parseInt() function parses a string argument and returns an integer of the specified radix
    Fun: parseInt(object.enjoymentRating),
  }));
  // console.log(objectStateData);

  // Students Individual for function StudentDetail.jsx
  const DataIndividualStudent = objectStateData.filter(
    (item) => item.Name === props.newNames
  );
  console.log(DataIndividualStudent);

  // 3. Function result FUN and Difficulty
  const getAverageResult = (Assignment, typeOfResult) => {
    const filterData = objectStateData
      .filter((item) => item.Assignment === Assignment)
      .map((result) => result[typeOfResult]);
    // Average
    const averageResult =
      filterData.reduce((a, b) => a + b, 0) / filterData.length; // ex. const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    return averageResult;
  };

  // //4. Data with Average result
  const allStudentsRatingAverage = allUniqueAssignments.map((Assignment) => ({
    Assignment: Assignment,
    Difficulty: getAverageResult(Assignment, "Difficulty"),
    Fun: getAverageResult(Assignment, "Fun"),
  }));

  //   console.log(allStudentsRatingAverage);

  return (
    <div className="dbcontainer">
      <div className="card z-depth-0">
        <div className="card-content">
          {/* <span className="card-title">Indiviual</span> */}

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
                data={DataIndividualStudent}
                x="Assignment"
                y="Difficulty"
                style={{ data: { fill: "#f2ba0d" } }}
              />
              <VictoryBar
                id="EnjoymentRateBar"
                value="true"
                labelComponent={<VictoryTooltip />}
                data={DataIndividualStudent}
                x="Assignment"
                y="Fun"
                style={{ data: { fill: "#F27F0D" } }}
              />
            </VictoryGroup>
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5]}
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
