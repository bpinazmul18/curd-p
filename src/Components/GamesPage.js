import { connect } from "react-redux";
import GamesList from "./GamesList";
import PropTypes from "prop-types";

const GamesPage = ({ games }) => {
  return (
    <div className="container">
      <h1 className="text-center my-5 display-4">Games List</h1>

      <GamesList games={games} />
    </div>
  );
};

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    games: state.games,
  };
}

export default connect(mapStateToProps)(GamesPage);
