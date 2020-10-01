import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props)=> {

   const [books,setBooks] = useState([ 
    {title:"The Alchemyst",id:1},
    {title:"The Wise Man's Fear",id:2},
    {title:"American Gods",id:3},
    {title:"Anansi Boys",id:4}
    ])

    return (
       <BookContext.Provider value={{books}}>
           {props.children}
       </BookContext.Provider>
    )
}

export default BookContextProvider