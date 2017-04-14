import React, { Component } from 'react';
import Navbar from './Navbar';
import MessagesContainer from './MessagesContainer';
import Sidebar from './Sidebar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div className='app-body'>
          <Sidebar/>
          <MessagesContainer/>
        </div>
      </div>
    );
  }
}

export default App;
