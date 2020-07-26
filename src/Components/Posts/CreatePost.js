import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../Store/actions/projectActions";
import { Redirect } from "react-router-dom";

const CreatePost = (props) => {
  const Form = {
    title: "",
    content: "",
  };
  const [postForm, setPostForm] = useState(Form);

  function handleChange(event) {
    const value = event.target.value;
    setPostForm({
      ...postForm,
      [event.target.id]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("postForm", postForm);
    props.createProject(postForm);
    props.history.push("/");
  };

  const { auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new post</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Post Content</label>
          <textarea id="content" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
