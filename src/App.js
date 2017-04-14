import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions/messages';
import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.actions.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    console.log(messages);
    return (
      <div>
        <h1>App Header</h1>
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
