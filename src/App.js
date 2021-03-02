import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [cont, setCont] = useState(0)

  function clickToAdd(){
    setCont(cont+1)
  }
  return (
    <>
    <p>{cont}</p>
    <button onClick={clickToAdd}>Click me</button>
    </>
  );
}

export default App;
