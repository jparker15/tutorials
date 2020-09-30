import React, { useState } from 'react'
import {v1} from 'uuid';
import { NewSongForm } from './NewSongForm';

export const SongList = () => {
    const [songs, setSongs] =  useState([
        {title:"ventia",id:1},
        {title:"secure the bag",id:2},
        {title:"hatchback",id:3}
    ]);
    const addSong = (title) =>{
        setSongs([...songs, {title:title, id:v1()}]);
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return(<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
    )
}