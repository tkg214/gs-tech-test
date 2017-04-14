import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/messages';
import MessagesToolbar from './MessagesToolbar';
import MessagesList from './MessagesList'
import '../index.css';

class MessagesContainer extends Component {

  componentWillMount() {
    this.props.actions.fetchMessages();
  }

  render() {
    const { messages, actions } = this.props;
    return (
      <main>
        <MessagesToolbar/>
        <MessagesList messages={messages} actions={actions}/>
      </main>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
