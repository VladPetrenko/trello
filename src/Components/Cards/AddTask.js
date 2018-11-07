import React from 'react';

import Card from '../Card/Card';
import AddButton from '../Card/Button';

class AddTask extends React.Component {
  state = {
    tasks: [],
  }
  addTask = () => {
    this.setState({tasks: [...this.state.tasks, <Card/>]});
     };

  render() {

    return (
     <div>
       {this.state.tasks}
       <AddButton onClick={this.addTask}/>
     </div>
    );
  }
}

export default AddTask;
