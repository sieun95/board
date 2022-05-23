import io from 'socket.io-client';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField'

const socket = io.connect('http://localhost:9400')

function Chat() {
  const [state, setState] = useState({ message: '', name: '' })
  const [chat, setChat] = useState([])


  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: [e.target.value] })
  }
  const onMessageSubmit = (e) => {
    e.preventDefault()
    const { name, message } = state
    socket.emit('message', { name, message })
    setState({ message: '', name })
  }

  const renderChat = () => {
    // console.log('chat : ')
    // console.log(chat)
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }
  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
      // Uncaught TypeError: chat.map is not a function
    })
  })

  return (
    <div className='card'>
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className='name-field'>
          <TextField name="name" onChange={e => onTextChange(e)} value={state.name} label='Name' />
        </div>
        <div>
          <TextField name="message" onChange={e => onTextChange(e)} value={state.message} label='Message' />
        </div>
        <button>Send Message</button>
      </form>
      <div className='render-chat'>
        <h1>Chat Log</h1>
        {renderChat()}

      </div>
    </div>
  )

}

export default Chat;

// let [ current_room, setCurrent_room ] = useState('')
// const socket = io.connect(`http://localhost:9400/chat`, {
//   transports: ['websocket']
// })

// const setRoom = () => {
//   const rooms = document.querySelector('#rooms')
//   let { value: current_room } = rooms.querySelectorAll('li')[0].classList
//   setCurrent_room(current_room)
// }

// const getMessage = () => {
//   socket.on('send', msg => {
//     const { c_id, author, data } = msg
//     // const liElement = document.querySelector('li')
//     // liElement.innerHTML = `
//     //     <span>
//     //         ${author} ${data}
//     //     </span>
//     // `
//     // chat_frm.firstChild.prepend(liElement)
//   })
// }

// const init = () => {
//   socket.emit('joinRoom', current_room)
//   getMessage()
// }
// const submithandler = e => {
//   e.preventDefault()
//   // console.log('target', e.target)
//   const {
//     chat_input: { value: input_value },
//     chat_author: { value: userid }
//   } = e.target

//   const msg = {
//     author: userid,
//     data: input_value,
//     c_id: current_room
//   }

//   socket.emit('message', msg)
//   addElement(msg);
// }

// function addElement(msg) {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode(`${msg.author}: ${msg.data}`);

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);
//   console.log(msg.c_id)
//   let chatting_room;
//   // add the newly created element and its content into the DOM
//   if (msg.c_id == 'room1') {
//     chatting_room = document.querySelector('#chatting')
//   } else if (msg.c_id == 'room2') {
//     chatting_room = document.querySelector('#chatting2')
//   }
//   // const chatting_room = document.querySelector('#chatting')
//   const currentDiv = chatting_room;
//   currentDiv.append(newDiv);
//   // document.body.insertBefore(newDiv, currentDiv);
// }
// const clickHandler = e => {
//   const { value: room_name } = e.target.classList

//   socket.emit('leaveRoom', current_room)
//   socket.emit('joinRoom', room_name)

//   if (room_name == 'room1') {
//     document.getElementById("chatting2").style.display = 'none';
//     document.getElementById("chatting").style.display = '';
//   }
//   if (room_name == 'room2') {
//     document.getElementById("chatting2").style.display = '';
//     document.getElementById("chatting").style.display = 'none';
//   }

//   window.location.hash = room_name
//   current_room = room_name
// }


// useEffect(() => {
//   setRoom()
//   init()
// })

// return (
//   <>
//     <ul id="rooms">
//       <li id="room1" className="room1" onClick={clickHandler}>방1</li>
//       <li id="room2" className="room2" onClick={clickHandler}>방2</li>
//     </ul>

//     <form action="" id="chat_frm" onSubmit={submithandler}>
//       <ul>
//         <li>
//           <input type="text" id="chat_author" placeholder="아이디" />
//           <input type="text" id="chat_input" placeholder="내용" />
//           <input type="submit" value="전송" />
//         </li>
//       </ul>
//     </form>
//     <div>
//       <div id="chatting">

//       </div>
//       <div id="chatting2">

//       </div>
//     </div>
//   </>
// )