import GamePageCard from "./GamePageCard";

const GamesPage = () => {
  return (
    <div className="container">
      <div className="gamePage">
        <h2 className="text-center my-5 display-4">Games List</h2>

        <div className="row">
          <div className="col-md-4">
            <GamePageCard />
          </div>

          <div className="col-md-4">
            <GamePageCard />
          </div>

          <div className="col-md-4">
            <GamePageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
