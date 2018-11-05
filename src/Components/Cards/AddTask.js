import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

import Card from '../Card/Card';
import AddButton from '../Card/Button';

class AddTask extends React.Component {
  state = {
    tasks: [],
  }
  addTask = () => {
    
    this.state.tasks.push(<Card/>);
    this.setState({tasks: this.state.tasks});
     };

  render() {

    return (
     <div>
       {this.state.tasks.map(el=>el)}
       <AddButton onClick={this.addTask}/>
     </div>
    );
  }
}

export default AddTask;
