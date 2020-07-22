// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";

function SubjectData() {
  const apiUrl = "https://studentsubdb.firebaseio.com/subjectData.json";
  // const [subData, setSubData] = useState([]);

  const getSubData = async () => {
    try {
      let response = await fetch(apiUrl, {
        method: "GET",
      });
      const result = await response.json();

      // let song = Object.keys(result).map((key) => ({
      //   id: key,
      //   artist: result[key].artist,
      //   genre: result[key].genre,
      //   rating: result[key].rating,
      //   title: result[key].title,
      // }));

      // setSubData(song);
      // return song;
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect((event) => {
    getSubData(event);
  }, []);

  return <div></div>;
}
export default SubjectData;
