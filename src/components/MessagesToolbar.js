import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

class MessagesToolbar extends Component {

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <RaisedButton label='Previous Page' primary={true} />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label='Next Page' primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default MessagesToolbar;
