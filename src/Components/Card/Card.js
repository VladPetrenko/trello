 import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    width: '350px',
    margin: '10px',
    background: 'white',
    
  },
  appFrame: {
    width: 360,
    height: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class FabIntegrationSnackbar extends React.Component {
 state = {
   title: 'title',
   textField: 'textField',
   editTitle: false,
   editTextField: false,
 }

changeTitle = () => {
  this.setState({editTitle: !this.state.editTitle})
}

saveTitle = () => {
  this.setState({
    editTitle: false,
    title: this.refs.titleRef.value
  })
}

changeText = () => {
  this.setState({editTextField: !this.state.editTextField})
}

saveText = () => {
  this.setState({
    editTextField: false,
    textField: this.refs.textRef.value
  })
}

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>

        <div className={classes.appFrame}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
              {this.state.editTitle ?

              <div>
                  <input
                  type="text"
                  defaultValue={this.state.title}
                  ref="titleRef"
                  />
                  <button onClick={this.saveTitle}>save</button>
              </div>
              
              : 
              
              <div onDoubleClick={this.changeTitle}>
                  {this.state.title}
              </div>
            }

              </Typography>
            </Toolbar>
            
          </AppBar>
          {
            this.state.editTextField ?

            <div>
                  <input
                  type="text"
                  defaultValue={this.state.textField}
                  ref="textRef"
                  />
                  <button onClick={this.saveText}>save</button>
            </div>
            
            :

            <div onDoubleClick={this.changeText}>
                {this.state.textField}
            </div>
          }
          
        </div>
      </div>
    );
  }
}

FabIntegrationSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FabIntegrationSnackbar);