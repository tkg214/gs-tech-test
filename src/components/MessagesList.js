import React, { Component, PropTypes } from 'react';
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

MessagesList.propTypes = {
  actions: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired
}


export default MessagesList;
