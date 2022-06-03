import './audio-player.css';
import { songs } from '../asset/data/data.js';
import { SongBase, convertTimer } from './playlist';
import httpService from "../services/httpService";
import React, { useEffect, useRef, useState } from 'react';

const player = new (SongBase as any)(songs, 0);
console.log(player);

const Audioplayer = (props: any) => {
  const songlist = songs;

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
    const nextSongIndex = player.next();
    setSong(songs[nextSongIndex], true);

  }

  const prev = () => {
    const prevSongIndex = player.prev();
    setSong(songs[prevSongIndex], true);
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