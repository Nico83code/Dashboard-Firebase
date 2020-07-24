import React, { useEffect, useState } from "react";
import Chart from "../Components/Dashboard/Chart";
import AverageRating from "../Components/Dashboard/AverageRating";


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

  return (
    <div>
      {subData ? <Chart data={subData} /> : null}
      {subData ? <AverageRating data={subData} /> : null}

    </div>
  );
}
export default SubjectData;
