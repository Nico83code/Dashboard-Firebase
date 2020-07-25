import React, { useEffect, useState } from "react";
import AverageRating from "../Components/Dashboard/AverageRating";
// import StudentOverview from "../Components/Student/StudentChart";
// import Students from "../Components/Student/Students";

function SubjectData() {
  const apiUrl = "https://dashboard-e5b12.firebaseio.com/subDB.json";
  const [subData, setSubData] = useState();

  const getSubData = async () => {
    try {
      let response = await fetch(apiUrl, {
        method: "GET",
      });
      const result = await response.json();
      setSubData(result);
      // return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect((event) => {
    getSubData(event);
  }, []);

  return <div>{subData ? <AverageRating data={subData} /> : null}</div>;
}
export default SubjectData;
