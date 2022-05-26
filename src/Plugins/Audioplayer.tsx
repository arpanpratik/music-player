import './audio-player.css';

import React from 'react';

const Audioplayer = () => {
  const mp3 = 'https://aveclagare.org/mp3/One%20Shot%20Lili%20-%20Master%20Half%20Wizard.mp3';
  let audio = new Audio(mp3);
  let src;
  // audio.play();


  const play = () => {
    src = mp3;

    console.log('clicked');

    console.log('audio', audio.duration);


    // document.getElementById('my-player').play()

    // audio.play();
  };
  // const stop = () => audio.pause();

  return (
    <div className='top-10'>

      <div className="audio-player">
        <div className="timeline">
          <div className="progress"></div>
        </div>
        <div className="controls">
          <div className="play-container">
            <div className="toggle-play play">
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

    </div>
  )
}

export default Audioplayer;