import React, { useEffect, useState, useRef } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import playList from "../../utils/MusicUtils/playList";
import { randomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, NextIcon } from "./MusicPlayer.styled";



const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
    });
    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(false);
  };

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon onClick={() => setIsPlaying(false)}/>

      ) : (
        <PlayIcon onClick={() => setIsPlaying(false)}/>
      )}

      <NextIcon onClick={shuffleHandler}/>

      <audio ref={playerRef} src={playList[currentSong]} onEnded={shuffleHandler}></audio>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
