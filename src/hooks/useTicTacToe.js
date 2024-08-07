import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());

  const [xTurn, setXTurn] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getDisplayMessage = () => {
    const winner = getWinner(board);
    if (winner) {
      return `Player ${winner} wins!!🥳`;
    }

    if (!board.includes(null)) return "It's a draw!🫂";

    return `Player ${xTurn ? "❌" : "🅾️"}'s turn`;
  };

  const getWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [cell1, cell2, cell3] = WINNING_PATTERNS[i];

      if (
        currentBoard[cell1] &&
        currentBoard[cell1] === currentBoard[cell2] &&
        currentBoard[cell1] === currentBoard[cell3]
      ) {
        return currentBoard[cell1];
      }
    }

    return null;
  };

  const handleCellClick = (index) => {
    const winner = getWinner(board);

    // if we have a winner of that block has some value then we do not allow any click
    if (winner || board[index]) return;

    const tempBoard = [...board];

    tempBoard[index] = xTurn ? "X" : "O";

    setBoard(tempBoard);
    setXTurn(!xTurn);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setXTurn(true);
  };

  return { board, getDisplayMessage, getWinner, handleCellClick, resetGame };
};

export default useTicTacToe;
