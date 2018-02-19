import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DialogBox from './DialogBox';

class MyAppBar extends Component {
  state = {
    open: false,
  };
  onClick = event => {

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  openPopover = () => {
    this.setState({
      open: true,
    });
  };


  render() {
    return (
      <div>
        <AppBar
          title="Customer Support"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.onClick}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleRequestClose}
          useLayerForClickAway={false}
          container={<DialogBox />}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <DialogBox />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}
export default MyAppBar;
