import { connect } from "react-redux";
import GamesList from "./GamesList";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
// import { gameAdded } from "../reducer/gameReducer";

const GamesPage = ({ games, dispatch }) => {
  const baseURL = "/api/games";

  const [apiGames, setApiGames] = useState();

  useEffect(async () => {
    await axios.get(baseURL).then((res) => {
      setApiGames(res.data);
    });
  }, []);

  console.log(apiGames);

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
