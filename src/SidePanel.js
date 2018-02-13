import React, { Component } from 'react';
import PanelCard from './PanelCard';


class SidePanel extends Component {
  
  render() {
    const names = ['Jim', 'Sid', 'Carolyn', 'Joe'];
    return (
      <div style={{ height: '100%', width: '380px', border: 'solid' }}>
        {
          names.map(name => (<PanelCard name={name} />))
        }
      </div>
    );
  }
}

export default SidePanel;
