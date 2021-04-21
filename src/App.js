import './App.scss';
import {Component, createRef} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    // this.start = this.start.bind(this);

    this.boxesCount = 50;
    this.boxesRef = [];
    for (let i=0; i<this.boxesCount; i++) this.boxesRef.push(createRef());
    console.log('1: ',this.boxesRef);
  }

  state =  {
    running: true
  }

  getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  start = () => {
    if(this.state.running) {
      this.boxesRef.forEach(boxRef =>{
        console.log('boxRef', boxRef);
        setInterval(
          () => boxRef.current.style.background = this.getRandomColor(), 1000
        )
      })
    }
  }
  
  render() {
    return (
      <div>
        <div className="box-container">
          { this.boxesRef.map((boxRef, index) =>(<div ref={boxRef} className="box" key = {index}>{index}</div>)) }
        </div>
        <div className="container">
          <button onClick={this.start} className="btn" id='btn-1'>Change Color</button>
        </div>
      </div>
      );
    }
}

export default App;
