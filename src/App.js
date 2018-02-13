import React, { Component } from 'react';
import './App.css';


import SidePanel from './SidePanel';
import MainContent from './MainContent';
import MyAppBar from './MyAppBar';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
        <MyAppBar />

        <div style={{ display: 'flex', height: '100%' }}>
          <SidePanel />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
