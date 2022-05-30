import './audio-player.css';
import { songs } from '../asset/data/data.js';

import React, { useEffect, useRef, useState } from 'react';

const Audioplayer = (props: any) => {
  const _baseURL = './data.json';

  const getSongs = () => {
    fetch(_baseURL, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((data) => {
      console.log(data);
    })
  }

  let [audio, setAudio] = useState(new Audio());
  const audioPlayer = useRef(null);
  const [song, setSongObj] = useState({
    id: null,
    duration: null,
    current: null,
    name: ''
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const setSong = (song: any, autoplay = false) => {
    const current = song;

    setSongObj(prevState => ({
      ...prevState,
      ...current
    }));

    audio.src = current.url;

    if (autoplay) {
      setIsPlaying(true);
      audio.play();
    };
  }

  const next = () => {
    // console.log(song, songs);
    const found = songs.findIndex((s, index) => s.id == song.id);
    console.log(songs[found + 1]);
    setSong(songs[found + 1], true);
  }

  const prev = () => {
    const pre = songs.findIndex((s, index) => s.id == song.id);
    if (pre == 0) return;
    console.log(songs[pre - 1]);

    setSong(songs[pre - 1], true);
  }

  useEffect(() => {
    setSong(songs[0]);
  }, [])




  /*  */

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
            <div onClick={next} className="next"> Next </div>
            <div onClick={prev}> Prev </div>
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