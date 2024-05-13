import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assests/Logo.svg/cross-svgrepo-com.svg";
import { ReactComponent as IconO } from "../../assests/Logo.svg/circle-svgrepo-com.svg";


const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game} = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index)
    checkForWinner(game.board)

    // if(result){
    //   updateBoard(index)
    // }
  
  };
  if(cellItem === "x") {
    return(<IconX/>)

  } else if(cellItem === "o") {
    return(<IconO/>)

  }
  return (<CellStyle onClick={cellClickHandler}>(game.turn === )</CellStyle>);
};

export default GameCell;
