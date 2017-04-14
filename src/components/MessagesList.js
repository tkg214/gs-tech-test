import React, { Component } from 'react';
import MessageCard from './MessageCard'
import moment from 'moment';

class MessagesList extends Component {

  render() {
    const { messages, actions } = this.props;
    return (
      <section>
        {messages.messages.map(message => {
          const formattedTimestamp = moment(message.created_at).format('MMMM Do YYYY, h:mm');
          return <MessageCard
                   key={message.id}
                   timestamp={formattedTimestamp}
                   content={message.text}
                 />
        })}
      </section>
    )
  }
}

export default MessagesList;
