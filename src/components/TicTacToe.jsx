import useTicTacToe from "../hooks/useTicTacToe";

// eslint-disable-next-line react/prop-types
const TicTacToe = ({ boardSize }) => {
  const { board, getDisplayMessage, handleCellClick, resetGame } =
    useTicTacToe(boardSize);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>TIC TAC TOE</h2>
      <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
        <span>{getDisplayMessage()}</span>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          maxWidth: "280px",
        }}
      >
        {board.map((each, index) => (
          <button
            style={{
              border: "1px solid",
              width: `${280 / boardSize}px`,
              height: `${280 / boardSize}px`,
              fontSize: "45px",
            }}
            key={index}
            onClick={() => handleCellClick(index)}
            disabled={each !== null}
          >
            {each}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
