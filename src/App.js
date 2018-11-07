import React, { Component } from 'react';

import './App.css';

import AddButton from './Components/Card/Button';
import AddCard from './Components/Cards/AddCard';

class App extends Component {
  state = {
    boards: [],
  }
  addBoard = () => {
    this.setState({boards: [...this.state.boards, <AddCard/>]});
     };

  render() {
    
    return (
      <div className="App">
      
      <AddCard/>
      
      {this.state.boards.map((boards, index)=>
          <div key={index}>{boards}</div>
        )}
      <div style={{padding: '140px'}}>
      <AddButton onClick={this.addBoard}/>
      </div>
      </div>
    );
  }
}

export default App;
