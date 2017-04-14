import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/messages';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CreateIcon from 'material-ui/svg-icons/content/add-circle';
import '../index.css';

class Sidebar extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
    };
  };

  _handleOpen() {
    this.setState({open: true});
  };

  _handleClose() {
    this.setState({
      open: false,
    });
  };

  _handleSubmit(e) {
    e.preventDefault();
    const messageInput = document.getElementById('message-input');
    this.props.actions.postMessage(messageInput.value);
    this.setState({
      open: false,
    });
  };

  render() {

    const openActions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={this._handleClose.bind(this)}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        keyboardFocused={true}
        onTouchTap={this._handleSubmit.bind(this)}
      />,
    ];

    return (
      <nav className='sidebar'>
        <List>
          <ListItem
            key={1}
            primaryText='Create Message'
            onTouchTap={this._handleOpen.bind(this)}
            leftIcon={<CreateIcon />}
          />
        </List>
        <Dialog
          title='Create Message'
          actions={openActions}
          modal={false}
          open={this.state.open}
          onRequestClose={this._handleClose.bind(this)}
        >
          <TextField
            hintText='Enter your message'
            id='message-input'
            multiLine={true}
            fullWidth={true}
          />
        </Dialog>
      </nav>
    );
  };
};

Sidebar.propTypes = {
  actions: PropTypes.shape({
    postMessage: PropTypes.func.isRequired
  })
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
};

export default connect(null, mapDispatchToProps)(Sidebar);
