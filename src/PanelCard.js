import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';




class PanelCard extends Component {
  render() {
    return (
     <div>
         <Card>
            <CardHeader
                title="Sid"
                subtitle="Hidden Message"
                avatar={<Avatar>S</Avatar>}
            />
            <CardActions
                actAsExpander={true}
            >
                <FlatButton label="Expand" />
            </CardActions>
            <CardText expandable={true}>
                Aye look at this!!! This card is about how amazing Sid is!
            </CardText>
         </Card>

         <Card>
            <CardHeader
                title="Jim"
                subtitle="Hidden Message"
                avatar={<Avatar>J</Avatar>}
            />
            <CardActions
                actAsExpander={true}
            >
                <FlatButton label="Expand" />
            </CardActions>
            <CardText expandable={true}>
                Aye look at this!!! This card is about how incredible Jim is!
            </CardText>
         </Card>

         <Card>
            <CardHeader
                title="Carolyn"
                subtitle="Hidden Message"
                avatar={<Avatar>C</Avatar>}
            />
            <CardActions
                actAsExpander={true}
            >
                <FlatButton label="Expand" />
            </CardActions>
            <CardText expandable={true}>
                Aye look at this!!! This card is about how much of a ROCKSTAR Carolyn is!
            </CardText>
         </Card>

         <Card>
            <CardHeader
                title="Joe"
                subtitle="Hidden Message"
                avatar={<Avatar>J</Avatar>}
            />
            <CardActions
                actAsExpander={true}
            >
                <FlatButton label="Expand" />
            </CardActions>
            <CardText expandable={true}>
                Aye look at this!!! This card is about how awesome Joe is!
            </CardText>
         </Card>
     </div> 
    );
  }
}

export default PanelCard;