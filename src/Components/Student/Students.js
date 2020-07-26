import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../App.css";

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

  const { auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (!data) return "loading";

  const newData = Array.from(new Set(data.map((item) => item.name))).map(
    (Name) => {
      return data.find((item) => item.name === Name);
    }
  );

  return (
    <div className="dbcontainer">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Students</span>
          <div>
            {newData.map((props) => (
              <div className="inline" key={props.id}>
                <button className=" white-text, waves-effect waves-light btn blue ">
                  <Link to={`/Students/${props.name}`}>{props.name}</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(connect(mapStateToProps), firestoreConnect())(Students);
