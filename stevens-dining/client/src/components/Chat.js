import React, {useEffect, useRef, useState} from 'react';
import io from 'socket.io-client';

function App() {
  const [state, setState] = useState({message: '', name: ''});
  const [chat, setChat] = useState([]);
  const [previousRoom, setPreviousRoom] = useState("");
  const [newRoom, setNewRoom] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:4000');
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    //console.log('join room')
    setChat([]);
    socketRef.current.emit("join-room",{
      newRoom: newRoom,
      previousRoom: previousRoom
    });

    socketRef.current.on("joined-room", (roomId) => {
      setNewRoom(roomId);
    })
  }, [newRoom, previousRoom])

  useEffect(() => {
    socketRef.current.on('receive-message', ({name, message}) => {
      console.log('The server has sent some data to all clients');
      setChat([...chat, {name, message}]);
    });
    socketRef.current.on('user_join', function (data) {
      setChat([
        ...chat,
        {name: 'ChatBot', message: `${data} has joined the chat`},
      ]);
    });

    return () => {
      socketRef.current.off('send-message');
      socketRef.current.off('user-join');
    };
  }, [chat]);

  const userjoin = (name) => {
    socketRef.current.emit('user_join', name);
  };

  const onMessageSubmit = (e) => {
    let msgEle = document.getElementById('message');
    let room = document.getElementById('room-selector');

    //room change
    if(room.value !== newRoom){
      setPreviousRoom(newRoom);
      setNewRoom(room.value);
    }
    //console.log([msgEle.name], msgEle.value);
    setState({...state, [msgEle.name]: msgEle.value});
    socketRef.current.emit('send-message', {
      name: state.name,
      message: msgEle.value,
      room: newRoom
    });
    e.preventDefault();
    setState({message: '', name: state.name});
    msgEle.value = '';
    msgEle.focus();
  };

  const onChangeHandler = () => {
    setChat([])
    let room = document.getElementById("room-selector");
    setPreviousRoom(newRoom);
    setNewRoom(room.value);
  }

  const renderChat = () => {
    return chat.map(({name, message}, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  
  return (
    <div>
      {state.name && (
        <div className='card'>
          <div className='render-chat'>
            <h1>Chat Log</h1>
            {renderChat()}
          </div>
          <form onSubmit={onMessageSubmit}>
            <h1>Messenger</h1>
            <div>
              <select id="room-selector" onChange={onChangeHandler}>
                <option value="">General</option>
                <option value="music">Music</option>
              </select>
              <input
                name='message'
                id='message'
                variant='outlined'
                label='Message'
              />
            </div>
            <button>Send Message</button>
          </form>
        </div>
      )}

      {!state.name && (
        <form
          className='form'
          onSubmit={(e) => {
            console.log(document.getElementById('username_input').value);
            e.preventDefault();
            setState({name: document.getElementById('username_input').value});
            userjoin(document.getElementById('username_input').value);
            // userName.value = '';
          }}
        >
          <div className='form-group'>
            <label>
              User Name:
              <br />
              <input id='username_input' />
            </label>
          </div>
          <br />

          <br />
          <br />
          <button type='submit'> Click to join</button>
        </form>
      )}
    </div>
  );
}

export default App;
