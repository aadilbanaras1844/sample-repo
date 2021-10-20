import react from 'react';
import { useState, useEffect } from 'react';

import logo from './logo.svg';
// import './App.css'; 
import axios from 'axios';

import UsersListing from './Users';

const getUsers = async() => {

}

// useEffect(()=>{
//   console.log('mount function')
// },[])


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <UsersListing data={[{Name: 'aadil'}]} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
