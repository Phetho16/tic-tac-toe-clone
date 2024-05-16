import React from "react";
import { AvatarWrapper, PlayerWrapper } from "./Player.styled";
import Avatar from 'react-nice-avatar'
import { SubTilte } from "../../styles/General.styled";

const Player = ({ player, isPlayerActive}) => {
  return (
    <PlayerWrapper>
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
      <Avatar {...player.avatarConfig} />
      </AvatarWrapper>

      <SubTilte>
        {player.name} ({player.choice.toUpperCase()})
      </SubTilte>
      <SubTilte>{player.score}</SubTilte>
    </PlayerWrapper>
  );
};

export default Player;
