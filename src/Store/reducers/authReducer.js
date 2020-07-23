const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCES":
      console.log("login succes");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCES":
      console.log("signout succes");
      return state;
    case "SIGNUP_SUCCES":
      console.log("signup succes");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
