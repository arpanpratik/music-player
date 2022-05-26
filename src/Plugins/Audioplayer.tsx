import './audio-player.css';

import React, { useEffect, useRef, useState } from 'react';

const Audioplayer = (props: any) => {
  // const mp3 = 'https://aveclagare.org/mp3/One%20Shot%20Lili%20-%20Master%20Half%20Wizard.mp3';
  const mp3 = "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
  const [audio] = useState(new Audio(mp3));
  // let src;
  const audioPlayer = useRef(null); //document.querySelector(".audio-player");
  // const playBtn = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState();

  useEffect(() => {
    (isPlaying) ? audio.play() : audio.pause();

    // console.log(audio.duration)
  })

  const setDuration = () => {

  };

  const createPlayList = () => { };

  return (
    <div className='top-10'>

      <div className="audio-player" id='container' ref={audioPlayer}>
        <div className="timeline">
          <div className="progress"></div>
        </div>
        <div className="controls">
          <div className="play-container">
            <div className={`toggle-play ${!isPlaying ? "play" : "pause"}`} onClick={() => setIsPlaying(!isPlaying)}>
            </div>
          </div>
          <div className="time">
            <div className="current">0:00</div>
            <div className="divider">/</div>
            <div className="length"></div>
          </div>
          <div className="name">Music Song</div>
          <div className="volume-container">
            <div className="volume-button">
              <div className="volume icono-volumeMedium"></div>
            </div>

            <div className="volume-slider">
              <div className="volume-percentage"></div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Audioplayer;