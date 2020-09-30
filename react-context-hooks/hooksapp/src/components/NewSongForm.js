import React, { useState } from 'react'

export const NewSongForm = ({addSong}) => {
    
    const [title,setTitle] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        addSong(title)
        setTitle("");
    }
    return (
       <form onSubmit={handleSubmit}>
           <label>song name:</label>
           <input type="test" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
           <input type="submit" value="add song"></input>
       </form>
    )
}
