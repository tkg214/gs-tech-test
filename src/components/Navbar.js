import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Navbar extends Component {

  render() {
    return (
      <header>
        <AppBar
          title='GS Tech Test'
          showMenuIconButton={false}
        />
      </header>
    )
  }
}

export default Navbar;
