import React from "react";


class AboutUs extends React.Component {

    constructor(props) {
        super();

        this.state = {
            text: true
        }
    }

    changeText = () => {
        this.setState({text: !this.state.text})
    }

    render () {
        return (
            <>
                <button onClick={this.changeText}> кнопка </button>
                {this.state.text ? <p> текст </p> : "" }
            </>
        )
    }

}

export default AboutUs;