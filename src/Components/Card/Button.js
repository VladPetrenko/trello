import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class AddButton extends React.Component {
 
    render() {
      return (
       <div>
          <Button variant="fab" color="secondary"  onClick={this.props.onClick}>
            <AddIcon />
          </Button>
       </div>
      );
    }
  }

  export default AddButton;