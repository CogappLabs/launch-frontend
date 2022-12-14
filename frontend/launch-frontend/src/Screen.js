import {Component} from "react";

class Screen extends Component {

    launchScreen = () => {
        this.props.socket.emit("launchScreen", this.props.screenProps.screenId);
    }


    render() {
        return (
            <button onClick={this.launchScreen}>
                Launch screen {this.props.screenProps.screenNum}
            </button>
        )
    }

}

export default Screen;
