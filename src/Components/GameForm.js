import React, { useState } from "react";
import { connect } from "react-redux";
import { gameAdded } from "../reducer/gameReducer";

const GameForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleCoverChange = (e) => {
    e.preventDefault();
    setCover(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(gameAdded({ title, cover }));
  };

  return (
    <div className="container">
      <div className="gameForm col-md-8 offset-2">
        <h2 className="text-center mt-5 display-4">Add Game</h2>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={handleTitleChange}
              id="title"
              name="title"
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cover">Cover</label>
            <input
              value={cover}
              onChange={handleCoverChange}
              id="cover"
              name="cover"
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <img src={cover} alt="" />
          </div>
          <button className="btn btn-primary">Save Game</button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { games: state.games };
}

export default connect(mapStateToProps)(GameForm);
