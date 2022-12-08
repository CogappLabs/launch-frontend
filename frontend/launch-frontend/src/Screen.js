import {Component} from "react";

class Screen extends Component {

    constructor(props) {
        super(props);
    }

    launchScreen = () => {
        this.props.socket.emit("launchScreen", this.props.screenProps.screenId);
    }



    render() {
        return (
            <button onClick={launchScreen}>
                Launch screen {this.props.screenProps.screenNum}
            </button>
        )
    }

}

export default Screen;
