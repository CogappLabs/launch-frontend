import './App.css';
import {Component, useState} from "react";
import socketIOClient from "socket.io-client";
import SetUpRoom from "./SetUpRoom";
import Screens from "./Screens";
import LaunchAll from "./LaunchAll";
const ENDPOINT = "/";

class App extends Component {
    state = {
        socket: socketIOClient(ENDPOINT),
        room: '',
    }

    updateRoom(room) {
        this.state.room = room;
    }
  render() {
      return (
          <div className="App">
            <SetUpRoom room={this.state.room} socket={this.state.socket} onUpdateRoom={this.updateRoom}/>
            <Screens room={this.state.room} socket={this.state.socket}/>
            <LaunchAll socket={this.state.socket}/>
          </div>
      );
  };
}

export default App;
