const initState = {
  projects: [
    { id: "1", title: "test test test 1", content: "lalalalala 1" },
    { id: "2", title: "test test test 2", content: "lalalalala 2" },
    { id: "3", title: "test test test 3", content: "lalalalala 3" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
