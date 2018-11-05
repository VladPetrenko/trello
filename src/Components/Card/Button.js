import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({

    button: {
    
    },
  });

class AddButton extends React.Component {
 
    render() {
        const { classes } = this.props;
        const fabClassName = classNames(classes.fab);
      return (
       <div>
          <Button variant="fab" color="secondary" className={fabClassName} onClick={this.props.onClick}>
            <AddIcon />
          </Button>
       </div>
      );
    }
  }
  
  AddButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(AddButton);