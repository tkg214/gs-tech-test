import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/messages';
import './App.css';
import Navbar from './Navbar';
import MessageList from './MessageList';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

class App extends Component {

  componentWillMount() {
    this.props.actions.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
   }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
