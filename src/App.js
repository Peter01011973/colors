import './App.scss';

import {useState, createRef} from 'react'

const App = () => {

  const boxesCount = 50;
  const boxesRef = [];
  for (let i=0; i<boxesCount; i++) boxesRef.push(createRef());
  console.log('1: ',boxesRef);

  const [running, setRunning] =  useState(true);

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const start = () => {
    if(running) {
      boxesRef.forEach(boxRef =>{
        console.log('boxRef', boxRef);
        setInterval(
          () => boxRef.current.style.background = getRandomColor(), 1000
        )
      })
    }
  }
  
  return (
    <div>
      <div className="box-container">
        { boxesRef.map((boxRef, index) =>(<div ref={boxRef} className="box" key = {index}>{index}</div>)) }
      </div>
      <div className="container">
        <button onClick={start} className="btn" id='btn-1'>Change Color</button>
      </div>
    </div>
    );
  }

export default App;
