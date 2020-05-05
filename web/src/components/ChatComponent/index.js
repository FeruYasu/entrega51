import React, { Component } from 'react'
import MessageForm from '../MessageForm/MessageForm'
import MessageList from '../MessageList/MessageList'
import TwilioChat from 'twilio-chat'
import './ChatComponent.css'
import api from "../../services/api";

import {Scroll}  from './styles';

export default class ChatComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      username:props.userName,
      channel: null,
      isLoading:true,
      error:null,
      token:"",
      chatName: props.chatName,
    }
    this.setupChatClient = this.setupChatClient.bind(this);
    this.channel= null;
  }

  componentDidMount() {
    this.addMessage({ body: 'Connecting...' });
    api.post("/chattoken",{identity: this.state.username}).then((results) => {
        const { identity, token } = results.data;
        this.setState({token});

      TwilioChat.create(this.state.token)
      .then(this.setupChatClient)
      //.catch(this.handleError);
      .catch(Error('Could not load chat.'));
    })
  }



  handleError(error) {
    console.error(error);
    this.setState({
      error: 'Could not load chat.'
    });
  }

  setupChatClient(client) {
    //this.client = client;
    client
      .getChannelByUniqueName(this.state.chatName )
      .then(channel => channel)
      .catch(error => {
        if (error.body.code === 50300) {
          return client.createChannel({ uniqueName: this.state.chatName });
        } else {
          this.handleError(error);
      }
    })
      .then(channel => {
       this.channel = channel;
       return this.channel.join().catch(() => {});
      })
      .then(() => {

        this.setState({ isLoading: false });
        //this.channel.getMessages().then(this.messagesLoaded);
        //this.channel.on('messageAdded', this.messageAdded);
        this.configureChannelEvents(this.channel);
        this.addMessage({ body: 'Connected!' })
        this.addMessage({ body: `Joined ${this.state.chatName } channel as ${this.state.username}` })
        window.addEventListener('beforeunload', () => this.channel.leave())
      })
      .catch(Error('Could not load chat.'));
   }

   /*
   messagesLoaded(messagePage) {
    this.setState({
      messages: messagePage.items.map(this.twilioMessageToKendoMessage)
    });
  }

  messageAdded(message) {
    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        this.twilioMessageToKendoMessage(message)
      ]
    }));
  }
*/
  addMessage = (message) => {
    const messageData = { ...message, me: message.author === this.state.username }
    this.setState({
      messages: [...this.state.messages, messageData],
    })
  }

  handleNewMessage = (text) => {
    if (this.channel) {
        this.channel.sendMessage(text)
    }
  }

  configureChannelEvents = (channel) => {
    channel.on('messageAdded', ({ author, body }) => {
      this.addMessage({ author, body })
    })

    channel.on('memberJoined', (member) => {
      this.addMessage({ body: `${member.identity} has joined the channel.` })
    })

    channel.on('memberLeft', (member) => {
      this.addMessage({ body: `${member.identity} has left the channel.` })
    })
  }

  render() {
    return (
      <div className="App">
        <Scroll>
          <MessageList messages={this.state.messages} />
        </Scroll>
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    )
  }
}
