import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

class MessagesToolbar extends Component {

  _handlePrevClick(e) {
    e.preventDefault();

  }

  _handleNextClick(e) {
    e.preventDefault();

  }


  render() {
    const { messages } = this.props;
    return (
      <Toolbar>
        <ToolbarGroup>
          <RaisedButton
            label='Previous Page'
            disabled={messages.prevPage ? false : true}
            primary={true}
            onTouchTap={this._handlePrevClick.bind(this)}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton
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
