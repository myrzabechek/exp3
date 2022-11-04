import React from "react";
class ContactsPage extends React.Component {
    constructor (props) {
        super ();
    }
    inputState = e => {
        this.setState({value: e.target.value});
    }
    showState = () => {
        console.log(this.state.value);
        document.getElementById("input").value="";
    }
    clearInput = () => {        
        document.getElementById("input").value="";
    }
    render () {
        return(
            <>  
                <input type="text" onChange={this.inputState} id="input"/>
                <button onClick={this.showState}>add</button>
                <button onClick={this.clearInput}>clear</button>
            </>
        )
    }
}
export default ContactsPage;