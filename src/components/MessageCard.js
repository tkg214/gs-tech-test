import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class MessageCard extends Component {

  _handleDeleteClick(e) {
    e.preventDefault();
    this.props.actions.deleteMessage(this.props.id);
  }

  render() {
    const { content, timestamp } = this.props;
    return (
      <Card expanded={true}>
        <CardText >
          {content}
        </CardText>
        <CardHeader
          subtitle={
          <span>
            {timestamp}
            <CardActions>
              <FlatButton
                label='Delete'
                icon={<DeleteIcon/>}
                onTouchTap={this._handleDeleteClick.bind(this)}
              />
            </CardActions>
          </span>}
        />
      </Card>
    );
  };
};

MessageCard.propTypes = {
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    deleteMessage: PropTypes.func.isRequired
  })
};

export default MessageCard;
