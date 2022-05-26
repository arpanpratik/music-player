import React from 'react';

const Audioplayer = () => {
  const mp3 = 'https://aveclagare.org/mp3/One%20Shot%20Lili%20-%20Master%20Half%20Wizard.mp3';
  // let audio = new Audio();
  let src;
  // audio.play();

  // console.log('audio', audio);

  const play = () => {
    src = mp3;

    console.log('clicked');
    
    // document.getElementById('my-player').play()

    // audio.play();
  };
  // const stop = () => audio.pause();

  return (
    <div>
      Audioplayer <br />

      <audio className="my_audio" controls preload="none" id='my-player'>
        <source src="{src}" type="audio/mpeg" />
        <source src="{src}" type="audio/ogg" />
      </audio>

      <button type="button" onClick={play}>Play</button>
    </div>
  )
}

export default Audioplayer;