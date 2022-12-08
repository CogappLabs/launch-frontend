import {Component} from "react";


class SetUpRoom extends Component {

    state = {
        room: this.props.room,
    }

    assignRoom = data => {
        this.props.socket.emit("joinRoom", this.state.room);
        this.props.onUpdateRoom(this.state.room);
    }

    render() {
        return (
            <div onSubmit={this.assignRoom}>
                Location:
                <label htmlFor="room">
                    <input
                        type="text"
                        id={'room'}
                        placeholder={'Enter location name...'}
                        value={this.state.room}
                        onChange={e => this.setState({ room: e.target.value })}
                    />
                </label>
                <button type="button" onClick={this.assignRoom}>
                    Create room
                </button>
            </div>
        )
    }

}

export default SetUpRoom;
