import ChatRoom from '../ChatRoom/ChatRoom';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="App-header">
        <p>
          Hello Codecademy!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <label>
          Choose the chat room:{' '}
          <select
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
          >
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>
        
          <button onClick={() => setShow(!show)}>
            {show ? 'Close chat' : 'Open chat'}
          </button>
          {show && <hr/>}
          {show && <ChatRoom roomId={roomId} />}
      </body>
    </>
  );
}
