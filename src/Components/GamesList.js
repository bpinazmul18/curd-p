const GamesList = ({ games }) => {
  const emptyMessage = (
    <p className="text-center display-5">There are no collection games yet.</p>
  );

  const gamesList = <p className="text-center display-4">Game list</p>;

  return <div>{games.length === 0 ? emptyMessage : gamesList}</div>;
};

export default GamesList;
