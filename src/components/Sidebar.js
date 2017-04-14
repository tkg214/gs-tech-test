import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import CreateIcon from 'material-ui/svg-icons/content/add-circle';
import '../index.css';

class Sidebar extends Component {

  render() {
    return (
      <nav className='sidebar'>
        <List>
          <ListItem
            key={1}
            primaryText='Create Message'
            leftIcon={<CreateIcon />}
          />
        </List>
      </nav>
    )
  }
}

export default Sidebar;
