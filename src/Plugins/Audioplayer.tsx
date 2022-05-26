import './audio-player.css';

import React, { useEffect, useRef, useState } from 'react';

const Audioplayer = (props: any) => {
  // const mp3 = 'https://aveclagare.org/mp3/One%20Shot%20Lili%20-%20Master%20Half%20Wizard.mp3';
  const mp3 = "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3";
  // const mp3 = "C:/Users/arpan/Downloads/Ya-Rabba.mp3";
  const [audio] = useState(new Audio(mp3));
  const audioPlayer = useRef(null); //document.querySelector(".audio-player");

  const [song, setSongObj] = useState({
    duration: null,
    current: null,
    name: 'FREE_background_music_dhalius'
  });

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    audio.volume = 0.06;
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        audioPlayer.current.querySelector(".progress").style.width = (audio.currentTime / audio.duration) * 100 + "%";

        setSongObj(prevState => ({
          ...prevState,
          ...{
            duration: convertTimer(audio.duration),
            current: convertTimer(audio.currentTime)
          }
        }));

        /* Progress bar */
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const convertTimer = (sec: any) => {
    let hours: any = Math.floor(sec / 3600);
    (hours >= 1) ? sec = sec - (hours * 3600) : hours = '00';
    let min: any = Math.floor(sec / 60);
    (min >= 1) ? sec = sec - (min * 60) : min = '00';
    (sec < 1) ? sec = '00' : void 0;

    (min.toString().length == 1) ? min = '0' + min : void 0;
    (sec.toString().length == 1) ? sec = '0' + sec : void 0;

    return min + ':' + sec.toString().split(".")[0];
  }

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
            <div className="current">{song.current || '00:00'}</div>
            <div className="divider">/</div>
            <div className="length">{song.duration || '00:00'}</div>
          </div>
          <div className="name">{song.name || 'Music Song'}</div>
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