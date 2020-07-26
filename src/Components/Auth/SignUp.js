import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../Store/actions/authActions";

function SignUp(props) {
  const signForm = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [signUpForm, setSignUpForm] = useState(signForm);

  function handleInput(event) {
    const value = event.target.value;
    setSignUpForm({
      ...signUpForm,
      [event.target.id]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signUp(signUpForm);
  };

  const { auth, authError } = props;
  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleInput} />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={handleInput} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">Firstname</label>
          <input type="text" id="firstName" onChange={handleInput} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleInput} />
        </div>
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Sign up</button>
        </div>
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUp(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
