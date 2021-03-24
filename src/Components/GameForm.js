import { connect } from "react-redux";
import { useState } from "react";

const GameForm = () => {
  // const [value, setValue] = useState("");
  // console.log("value testing...", value);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //
  //   e.target.name.value(setValue(e.target.value));
  // };

  return (
    <div className="container">
      <div className="gameForm col-md-8 offset-2">
        <h2 className="text-center mt-5 display-4">Add Game</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              // onChange={handleChange}
              className="form-control"
              id="title"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cover">Cover</label>
            <input
              name="cover"
              // onChange={handleChange}
              className="form-control"
              id="cover"
              type="text"
            />
          </div>

          <div className="form-group">
            <img
              src="https://i.picsum.photos/id/252/200/200.jpg?hmac=SQ2Qka9ubeKZdr5jg7hHSzQgeyZcKk_o8H4_OkTw3F4"
              alt=""
            />
          </div>
          <button className="btn btn-primary">Save Game</button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state, props) {
  console.log("State testing...", state);
  return { game: state };
}

export default connect(mapStateToProps)(GameForm);
