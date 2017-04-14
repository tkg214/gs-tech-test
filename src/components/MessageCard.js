import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MessageCard = (props) => (
  <Card expanded={true}>
    <CardText >
      {props.content}
    </CardText>
    <CardHeader
      subtitle={props.timestamp}
    />
    <CardActions>
      <FlatButton label='Delete' />
    </CardActions>
  </Card>
);

export default MessageCard;
