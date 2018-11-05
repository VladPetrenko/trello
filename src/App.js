import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddButton from './Components/Card/Button';
import AddCard from './Components/Cards/AddCard';

class App extends Component {
  state = {
    boards: [],
  }
  addBoard = () => {
    this.state.boards.push(<AddCard/>);
    this.setState({boards: this.state.boards});
     };

  render() {
    
    return (
      <div className="App">
      
      <AddCard/>
      
      {this.state.boards.map(el=>el)}
      <div style={{padding: '140px'}}>
      <AddButton onClick={this.addBoard}/>
      </div>
      </div>
    );
  }
}

export default App;
