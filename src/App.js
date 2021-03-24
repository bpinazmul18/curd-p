import { Link, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import GamesPage from "./Components/GamesPage";
import GameForm from "./Components/GameForm";

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <Link className="navbar-brand" to="/games">
          Games
        </Link>

        <Link className="navbar-brand" to="/game/new">
          New Game
        </Link>
      </nav>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/game/new" component={GameForm} />
      </Switch>
    </div>
  );
};

export default App;
