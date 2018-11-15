import React, { Component } from 'react';

import './App.css';

import AddButton from './Components/Button/Button';
import AddCard from './Components/Cards/AddCard';

import Board from './Components/Board/Board';

class App extends Component {
state = {
  boards: [{title:'titleBoard', text: 'textBoard', cards: []}],
  
}

addBoard = () => {
  let boardText = {title: 'titleBoard', text:'textBoard'};
  this.setState({boards: [...this.state.boards, boardText]})
}

addCard = (cat, key, val)=> {
  const category = {...this.state[cat]};
  category[key] = val;
  this.setState({ [cat]: category });
}
  render() {
     

    //  const trelloBoard = this.state.boards.map((board, i) => 
    //  <div key={i}>
    //    <Board title={board.title} textField={board.text} addBoard={this.addBoard} addCard={this.addCard}></Board>
       
    //  </div>
    //  )

    return (
      <div className="App">
        <Board items={this.state.boards} addBoard={this.addBoard} addCard={this.addCard}/>
      </div>
    );
  }
}

export default App;
