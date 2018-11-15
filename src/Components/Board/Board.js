import React, { Component } from 'react';

import Card from '../Card/Card';
import AddButton from '../Button/Button';

class Board extends Component {

  render() {
    
    
    return (
    <div>
        {this.props.items.map((el, i) => 
        <div key={i}>
        <div>
        <Card title={el.title} textField={el.text}/>
        <AddButton onClick={this.props.addBoard}/>
        <AddButton onClick={this.props.addCard}/>
        </div>
        {el.cards != null ?
            (<div>
        {el.cards.map((card, idx) =>
                <div key={idx}>
                
                <Card title={card.title} textField={card.text}/>
                <AddButton onClick={this.props.addBoard}/>
                <AddButton onClick={this.props.addCard}/>
                </div>
            )}
            </div>) 
            
            : 
            
            (<div>sdfsdf</div>)}

        </div>
        )}

            
    </div>
      
    );
  }
}

export default Board;