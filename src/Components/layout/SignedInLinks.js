import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../Store/actions/authActions";

function SignedInLinks(props) {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/listoverview">List Overview</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Notifications</NavLink>
        </li>
        <li>
          <NavLink to="/create">New Post</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to="/profile" className="btn btn-floating blue lighten-1">
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
