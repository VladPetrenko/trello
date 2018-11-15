import React, { Component } from 'react';

import './App.css';

import AddButton from './Components/Card/Button';
import AddCard from './Components/Cards/AddCard';
import Card from './Components/Card/Card';

class App extends Component {
  state = {
    boards: [<AddCard/>],
    cards: [{title: 'sdsf', text: 'sdsafsadfsdfsf'}, {title: 'sds23242342423f', text: 'sdsafsadfsdfssfsfsfsfsfsff'}]
  }
  addBoard = () => {
    this.setState({boards: [...this.state.boards, <AddCard/>]});
    JSON.stringify(this.state);
     };

     componentDidMount(){
       fetch('board.json')
       .then(res => res.json());
     }

  render() {
    
    return (
      <div className="App">
      
      {this.state.cards.map((card, i)=>
      <div>
          <Card title={card.title} textField={card.text}/>
        </div>
      )}
      {/* {this.state.boards.map((boards, index)=>
          <div key={index}>{boards}</div>
        )}
      <div style={{padding: '140px'}}>
      <AddButton onClick={this.addBoard}/>
      </div> */}

      </div>
    );
  }
}

export default App;
