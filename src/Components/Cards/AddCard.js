import React from 'react';

import Card from '../Card/Card';
import AddButton from '../Button/Button';

class AddCard extends React.Component {
  state = {
    cards: [],
  }

  addCard = () => {
    this.setState({cards: [...this.state.cards, <Card/>]});
     };
  
  render() {

    return (
     <div style={{ margin: '0 20px', textAlign: 'center', width: '350px', float: 'left'}}>
     <Card/>
       {this.state.cards.map((cards, index)=>
          <div key={index}>{cards}</div>
        )}
       <div>
        <AddButton onClick={this.addCard}/>
       </div>
     </div>
    );
  }
}

export default AddCard;
 