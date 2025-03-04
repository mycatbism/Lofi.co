import React, { useRef, useState } from "react";
import Background from "./components/background";
import Header from "./components/Header";
import Controller from "./components/Controller";
import Audio from "./components/Audio";
import LeftSidebar from "./components/LeftSidebar";

const App = () => {
  const audioRef = useRef(null);
  const musicRef = useRef(null);
  const [activeAudio, setActiveAudio] = useState(false);
  const [activeMusic, setActiveMusic] = useState(false);



  const playAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setActiveAudio(true)
    } else {
      audioRef.current.pause();
      setActiveAudio(false)
    }
  };
  const playMusic = () => {
    if (musicRef.current.paused) {
      musicRef.current.play();
      setActiveMusic(true)
    } else {
      musicRef.current.pause();
      setActiveMusic(false)
    }
  };


  return (
    <div className='relative h-screen'>
      <Background />
      <Header />
      <Audio audioRef={audioRef}  musicRef={musicRef}/>
      <Controller playAudio={playAudio} checkActiveAudio={activeAudio} playMusic={playMusic} activeMusic={activeMusic}/>
      <LeftSidebar/>
    </div>
  );
};

export default App;
