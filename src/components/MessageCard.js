import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MessageCard = (props) => (
  <Card expanded={true}>
    <CardHeader
      title='Date'
    />
    <CardText >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label='Delete' />
    </CardActions>
  </Card>
);

export default MessageCard;
