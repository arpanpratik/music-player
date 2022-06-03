import React from 'react'

/* Iterator pattern design - Creational Pattern

//create a constructor function,pass 3 parametes,[]songs,index,settings(repeat->default:false,suffle->default:false)
//2->use prototype to define methods to the constructor function methods->next,previous return methods
//3->export the constructor function->songs,index,settings

*/

// new Date();
// new Array();

/* class SongsCls {
    songs;
    songIndex;
    settings;
    constructor(songs: any[], songIndex: number, settings?: any) {
        this.songs = songs;
        this.songIndex = songIndex;
        this.settings = {
            repeat: false,
            shuffle: false,
            ...settings
        };
    }
} */

export const SongBase = function (songs: any[], songIndex: number, settings?: any) {
    this.songs = songs;
    this.songIndex = songIndex;
    this.settings = {
        repeat: false,
        shuffle: false,
        ...settings
    };
    this.songCount = this.songs.length;
}


/* Prototype Inheritance -  */
SongBase.prototype.next = function () {
    this.songIndex = this.songIndex + 1;

    if (this.songIndex > this.songCount - 1) {  // 5 > 4
        this.songIndex = 0;
    }

    /* If  shuffle == true */
    // random songs index send range (0,this.songs.length);
    if(this.settings.suffle === true) {
        let randomIndex =Math.floor((Math.random()*this.songs.length)+1)
        this.songIndex = randomIndex;
    }

    /* If  repeat == true */
    if(this.settings.repeat === true) {
        this.songIndex = 0;
    }

    return this.songIndex;
};

SongBase.prototype.prev = function () {
    if (this.songIndex <= 0) {
        this.songIndex = this.rewind();
    }
    this.songIndex -= 1;

    console.log(this.songIndex);
    return this.songIndex;
};

SongBase.prototype.hasNext = function () {
    return this.songIndex > this.songCount - 1;
}

SongBase.prototype.rewind = function () {
    return this.songIndex.length;
}

SongBase.prototype.addCustomPlaylist = function () {

}


export const convertTimer = (sec: any) => {
    let hours: any = Math.floor(sec / 3600);
    (hours >= 1) ? sec = sec - (hours * 3600) : hours = '00';
    let min: any = Math.floor(sec / 60);
    (min >= 1) ? sec = sec - (min * 60) : min = '00';
    (sec < 1) ? sec = '00' : void 0;

    (min.toString().length == 1) ? min = '0' + min : void 0;
    (sec.toString().length == 1) ? sec = '0' + sec : void 0;

    return min + ':' + sec.toString().split(".")[0];
}

// export default playlist