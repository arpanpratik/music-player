import React from 'react';

const _baseURL = './data.json';

const httpService = () => {
    // const fetchSongs = () => {
        fetch(_baseURL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((data) => {
            console.log(data);
        })
    // }
}

export default httpService