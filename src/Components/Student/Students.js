import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Students(props) {
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

  // step 1 Array.from(new Set()) going to make a new set and I want to turn back in an array with Array.from
  // Step 2 new Set will only allow unique values in it
  // Step 3 .map(Name => [...]) run map function to return the actual data
  const newData = Array.from(new Set(data.map((item) => item.name))).map(
    (Name) => {
      return data.find((item) => item.name === Name);
    }
  );

  console.log(newData);
  return (
    <div className="dbcontainer">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Students</span>
          {newData.map((props) => (
            <div key={props.id}>
              <Link to={`/Students/${props.name}`}>{props.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Students;
