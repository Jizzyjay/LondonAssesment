import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
     <Navbar />
    <div className="container">
      <Sidebar />
      <Body />
    </div>
    </>
    
  );
}

export default App;
