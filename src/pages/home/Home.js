import React from "react";
import { Container,SubTilte, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate} from "react-router-dom"


const Home = () => {
  const navigate= useNavigate();
  return (
    <Container>
      <Title>TicTacToe</Title>
      <SubTilte>Play with your friends, higher score wins!</SubTilte>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
