import React, { useState } from 'react'
import {v1} from 'uuid';

export const SongList = () => {
    const [songs, setSongs] =  useState([
        {title:"ventia",id:1},
        {title:"secure the bag",id:2},
        {title:"hatchback",id:3}
    ]);
    const addSong = () =>{
        setSongs([...songs, {title: "new song", id:v1()}]);
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return(<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick={addSong}>Add + </button>
        </div>
    )
}