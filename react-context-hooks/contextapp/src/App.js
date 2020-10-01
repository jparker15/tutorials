import React from 'react';
import Booklist from './Components/Booklist';
import Navbar from "./Components/Navbar"
import ThemeToggle from './Components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <BookContextProvider>
            <Booklist/>
          </BookContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
     
    </div>
  );
}

export default App;
