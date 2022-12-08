import {Component} from "react";
import Screen from "./Screen"

class Screens extends Component {

    state = {
        screens: [],
    }

    getScreens = () => {
        this.props.socket.on("getScreens", evt => {
            this.setState({screens: evt})
        });

        this.props.socket.emit("getScreens");
    }



    render() {
        if (this.props.room) {
            if (!this.screens.length) {
                return  (
                    <button type="button" onClick={this.getScreens}>
                        Refresh screen list
                    </button>
                );
            }
            return this.screens.map((item) => {
                return <Screen screenProps={item} socket={this.props.socket}/>
            });
        }
    }

}

export default Screens;
