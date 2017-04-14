import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

class MessagesToolbar extends Component {

  _handlePrevClick(e) {
    e.preventDefault();
    this.props.actions.fetchPageMessages(this.props.messages.prevPage);
  }

  _handleNextClick(e) {
    e.preventDefault();
    this.props.actions.fetchPageMessages(this.props.messages.nextPage);
  }


  render() {
    const { messages } = this.props;
    return (
      <Toolbar>
        <ToolbarGroup>
          <FlatButton
            label='Previous Page'
            disabled={messages.prevPage ? false : true}
            primary={true}
            onTouchTap={this._handlePrevClick.bind(this)}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton
            label='Next Page'
            disabled={messages.nextPage ? false : true}
            primary={true}
            onTouchTap={this._handleNextClick.bind(this)}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

MessagesToolbar.propTypes = {
  actions: PropTypes.shape({
    fetchPageMessages: PropTypes.func.isRequired
  }),
  messages: PropTypes.object.isRequired
}

export default MessagesToolbar;
