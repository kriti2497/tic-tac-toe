import { useState } from "react";

const useTicTacToe = (size) => {
  const initialBoard = () => Array(size * size).fill(null);
  const [board, setBoard] = useState(initialBoard());

  const [xTurn, setXTurn] = useState(true);

  const calculateWinningPatterns = (size) => {
    let result = [];
    let arr = Array.from({ length: size * size }, (_, i) => i);

    for (let row = 0; row < size; row++) {
      let tempRow = [];
      for (let col = 0; col < size; col++) {
        tempRow.push(arr[row * size + col]);
      }
      result.push(tempRow);
    }

    for (let col = 0; col < size; col++) {
      let tempCol = [];
      for (let row = 0; row < size; row++) {
        tempCol.push(arr[row * size + col]);
      }
      result.push(tempCol);
    }

    let tempDiag = [];
    for (let i = 0; i < size; i++) {
      tempDiag.push(arr[size * i + i]);
    }

    result.push(tempDiag);

    tempDiag = [];
    for (let i = 0; i < size; i++) {
      tempDiag.push(arr[size * i + (size - i - 1)]);
    }

    result.push(tempDiag);

    return result;
  };

  const WINNING_PATTERNS = calculateWinningPatterns(size);

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
