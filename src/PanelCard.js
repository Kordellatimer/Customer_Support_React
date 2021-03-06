import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';





class PanelCard extends Component {
  render() {
      const name = this.props.name;
      const initial = name[0];
      console.log(name);
    return (
     <div>
         <Card>
            <CardHeader
                title= {name}
                subtitle="Hidden Message"
                avatar={<Avatar>{initial}</Avatar>}
            />
            <CardActions
                actAsExpander={true}
            >
                <FlatButton label="Expand" />
            </CardActions>
            <CardText expandable={true}>
                Aye look at this!!! This card is about how amazing {name} is!
            </CardText>
         </Card>
     </div> 
    );
  }
}

PanelCard.propTypes = {
    name: PropTypes.string.isRequired,
};

export default PanelCard;