import {Component} from "react";

class LaunchAll extends Component {

    launchAllScreens = () => {
        this.socket.emit("launchScreens");
    }

    render() {
        return (
            <button onClick={this.launchAllScreens}>
                Launch all screens
            </button>
        )
    }

}

export default LaunchAll;
