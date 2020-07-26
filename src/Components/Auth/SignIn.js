import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../Store/actions/authActions";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  const loginPassword = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(loginPassword);

  function handleInputChange(event) {
    const value = event.target.value;
    setLogin({
      ...login,
      [event.target.id]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signIn(login);
  };

  const { authError, auth } = props;
  if (auth.uid) return <Redirect to="/" />;
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleInputChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={handleInputChange} />
        </div>
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Login</button>
        </div>
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
