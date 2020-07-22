import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOnChangeEmail = (event) => {
    setEmail({ [event.target.id]: event.target.value });
  };
  const handleOnChangePassword = (event) => {
    setPassword({ [event.target.id]: event.target.value });
  };

  const handleOnChangeFirstName = (event) => {
    setFirstName({ [event.target.id]: event.target.value });
  };
  const handleOnChangeLastName = (event) => {
    setLastName({ [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, firstName, lastName);
    // postData(event);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleOnChangeEmail} />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={handleOnChangePassword}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            id="firstName"
            onChange={handleOnChangeFirstName}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleOnChangeLastName} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
