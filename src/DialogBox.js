import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';


const accountSid = 'AC65db4e72ba9a26a6da52fccff4949641';
const authToken = '4e7d1be34496c4b96eeb1466ba9aeba0';


class DialogBox extends Component {
    state = {
        open: false,
      };

      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
  
  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
      ];
    
    return (
        <div>
        <MenuItem primaryText="Call Customer Support" onClick={this.handleOpen} />
        <Dialog
          title="Twilio Here We Come!"
          actions={actions}
          modal={true}
          open={this.state.open}
          disableBackdropClick={true}
        >
          When this pops open, it is sending a call to our customer support team using Twilio on your behalf.
        </Dialog>
      </div>
    );
  }
}

export default DialogBox;