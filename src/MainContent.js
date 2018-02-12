import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    return (
      <div style={{ height: '100%', width: '100%', border: 'solid' }}>
        <h1>This is the main container!</h1>
        <p>
          I can add some text in here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>
      </div>
    );
  }
}

export default MainContent;
