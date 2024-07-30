import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4242');


const Chat = ()=>{
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
        setMessages(prevMessages => [...prevMessages, msg]);
    });

    return () => {
        socket.off('chat message');
    };
}, []);

const handleSubmit = (e) => {
  e.preventDefault();
  if (input.trim()) {
      socket.emit('chat message', input);
      setInput('');
  }}

return (
    <div className='chat'>
        <ul className="list">
            <li class="active">Topic ABC</li>
            <li>Topic ABY<span class="new">7</span></li>
        </ul>
            {messages.map((msg, index) => (
                <li className="active" key={index}>{msg}</li>
            ))}
        <form id="form" onSubmit={handleSubmit}>
            <input 
                id="input" 
                autoComplete="off" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button>Send</button>
        </form>
        <div class="container">
    <div class="message--container">
      <div class="messages">
        <div class="message info">
          <span class="time"></span>
          <span class="from">&nbsp;</span>
          <span class="text">Messages since July 19th 2016</span>
        </div>
        <div class="message me">
          <span class="time">[19.07.2016 08:42:28]</span>
          <span class="from">tyurderi</span>
          <span class="text">a b a b a b ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab ab  ab ab ab </span>
        </div>
        <div class="message hr"></div>
        <div class="message">
          <span class="time">[19.07.2016 08:42:38]</span>
          <span class="from">tyurd</span>
          <span class="text">wazzup</span>
        </div>
      </div>
    </div>
    <div class="form">
      <textarea placeholder="Your message (Ctrl+Enter to submit)"></textarea>
    </div>
  </div>
  <ul class="users">
    <li><i class="fa fa-circle state-online"></i>tyurderi</li>
    <li><i class="fa fa-circle state-offline"></i>tyurd</li>
  </ul>
    </div>
);
}

export default Chat;
