import io from "socket.io-client";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

function Chat() {
  const socket = io.connect("http://localhost:9400");
  console.log(socket.id);
  const [state, setState] = useState({
    socketId: socket.id,
    message: "",
    name: localStorage.getItem("userId") ? localStorage.getItem("userId") : "",
  });
  const [chat, setChat] = useState([]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: [e.target.value] });
  };
  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  const renderChat = () => {
    // console.log('chat : ')
    // console.log(chat)
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };
  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  return (
    <div className="card" style={{ display: "flex", float: "left" }}>
      <form
        onSubmit={onMessageSubmit}
        style={{ padding: "50px 150px 50px 150px" }}
      >
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div
        className="render-chat"
        style={{ padding: "50px 350px 50px 350px", justifyContent: "center" }}
      >
        <h1>Chat Log</h1>
        <div style={{ height: 500, width: 250, border: "1px solid black" }}>
          {renderChat()}
        </div>
      </div>
    </div>
  );
}

export default Chat;
