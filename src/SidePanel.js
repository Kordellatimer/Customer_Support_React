import React, { Component } from 'react';
import PanelCard from './PanelCard';


class SidePanel extends Component {
  render() {
    return (
      <div style={{ height: '100%', width: '380px', border: 'solid' }}>
        <PanelCard />
      </div>
    );
  }
}

export default SidePanel;
