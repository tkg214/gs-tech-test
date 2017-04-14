import React, { Component } from 'react';
import MessageCard from './MessageCard'

class MessagesList extends Component {

  render() {
    const { messages, actions } = this.props;
    return (
      <section>
        {messages.messages.map(message => {
          return <MessageCard
                   key={message.id}
                   timestamp={message.created_at}
                   content={message.text}
                 />
        })}
      </section>
    )
  }
}

export default MessagesList;
