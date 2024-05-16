import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import {ModalContext} from '../../contexts/ModalContext'
import RoundOverModal from "../../Modal/RoundOverModal/RoundOverModal";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assests/Logo.svg/icon-x.svg";
import { ReactComponent as IconO } from "../../assests/Logo.svg/icon-o.svg";
import { ReactComponent as XIconOutline } from "../../assests/Logo.svg/icon-x-outline.svg";
import { ReactComponent as OIconOutline } from "../../assests/Logo.svg/icon-o-outline.svg";





const GameCell = ({ cellItem, index, isWinningCell}) => {
  console.log(isWinningCell)
  const { updateBoard, game, roundComplete} = useContext(GameContext);
const {handleModal} = useContext(ModalContext)


  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board)
    console.log(result)
    if(result){
      roundComplete(result)
      handleModal(<RoundOverModal/>)
    }

    
  };
  if (cellItem === "x") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconX className="markedItem"/>
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconO  className="markedItem"/>
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? 
      <XIconOutline className="outlineIcon"/> :
       <OIconOutline  className="outlineIcon"/>}
    </CellStyle>
  );
};

export default GameCell;
