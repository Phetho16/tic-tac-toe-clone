import React, { useContext } from "react";
import { Container,SubTilte, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate} from "react-router-dom"
import { SfxContext } from "../../contexts/SfxContext";


const Home = () => {
  const navigate= useNavigate();
  const { hoverSfx } = useContext(SfxContext)
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <SubTilte>Play with your friends, higher score wins!</SubTilte>
      <Button onClick={() => navigate("/game-on")} onmouseenter={() => hoverSfx()}>Play Now</Button>
    </Container>
  );
};

export default Home;
