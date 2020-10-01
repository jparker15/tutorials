import React, { useState,useEffect } from 'react'
import {v1} from 'uuid';
import { NewSongForm } from './NewSongForm';

export const SongList = () => {
    const [songs, setSongs] =  useState([
        {title:"ventia",id:1},
        {title:"secure the bag",id:2},
        {title:"hatchback",id:3}
    ]);
    const [age,setAge] = useState(20);
    const addSong = (title) =>{
        setSongs([...songs, {title:title, id:v1()}]);
    }
    //runs when data is changed in this comp
    useEffect(()=>{
        console.log("songs has changed", songs);
    },[songs])
    useEffect(()=>{
        console.log("age has changed", age);
    },[age])
    return (
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return(<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=> setAge(age + 1)}>Add to Age:{age}</button>
        </div>
    )
}