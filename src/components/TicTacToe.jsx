import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const { board, getDisplayMessage, handleCellClick, resetGame } =
    useTicTacToe();

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
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: "300px",
        }}
      >
        {board.map((each, index) => (
          <button
            style={{
              border: "1px solid",
              width: "100px",
              height: "100px",
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
