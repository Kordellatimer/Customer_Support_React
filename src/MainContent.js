import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './MainContent.css'

class MainContent extends Component {

  constructor(props) {
        super(props)
        this.state = {
          messages: [],
        }
      } 

    handleNewMessage = (text) => {
      this.setState({
        messages: [...this.state.messages, { me: true, author: "Me", body: text }],
      })
    }

  render() {
    return (
      <div style={{ height: '100%', width: '100%', border: 'solid' }}>
        <h1>Come Chat with US!</h1>
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    );
  }
}

export default MainContent;
