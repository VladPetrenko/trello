import React from 'react';

import Card from '../Card/Card';
import AddButton from '../Card/Button';

class AddCard extends React.Component {
  state = {
    cards: [<Card/>],
    
  }

  addCard = () => {
    this.setState({cards: [...this.state.cards, <Card/>]});
     };
  
  render() {

    return (
     <div style={{ margin: '0 20px', textAlign: 'center', width: '350px', float: 'left'}}>
       {this.state.cards}
       <div>
        <AddButton onClick={this.addCard}/>
       </div>
     </div>
    );
  }
}

export default AddCard;
 