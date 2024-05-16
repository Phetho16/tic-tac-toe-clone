import React, { useContext } from "react";
import { SubTilte, Title } from "../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../components/Button/Button";
import { GameContext } from "../../contexts/GameContext";
import { ModalContext } from "../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";

const RoundOverModal = () => {
  const { restBoard, game, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const navigate = useNavigate();
  return (
    <>
      <ModalHeader>
        
        <Title primary>
          {game.roundWinner
            ? ` ${game.roundWinner.name}  Wins This Round!`
            : "Round drawn!"}
        </Title>
      </ModalHeader>
      <ModalBody>
        
        <SubTilte primary> Choices will be switched now.</SubTilte>
        <SubTilte primary>
          {game.player1.name}: {game.player1.score}
        </SubTilte>
        <SubTilte primary>
          {game.player2.name}: {game.player2.score}
        </SubTilte>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            restBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#8437f9" onClick={() => {
          navigate("/")
         restartGame()
         handleModal();

        }}>
          Restart
        </Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
