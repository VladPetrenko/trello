import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Divider, withWidth } from '@material-ui/core';

import Card from '../Card/Card';
import AddButton from '../Card/Button';


const ButtonStyle = {
  marginLeft: '145px',
}

const styles = theme => ({

  button: {
    marginLeft: '145px',
  },
});

class AddCard extends React.Component {
  state = {
    cards: [<Card/>],
    
  }
  addCard = () => {
    this.state.cards.push(<Card/>);
    this.setState({cards: this.state.cards});
     };
  

  render() {

    return (
     <div style={{ margin: '0 20px', textAlign: 'center', width: '350px', float: 'left'}}>
       {this.state.cards.map(el=>el)}
       <div>
        <AddButton onClick={this.addCard}/>
       </div>
     </div>
    );
  }
}

export default withStyles(styles) (AddCard);
