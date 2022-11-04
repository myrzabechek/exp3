import React from "react";
class PortfolioPage extends React.Component {
    constructor (props) {
        super (props);
        this.state = {works: []}
    }
    addList = () => {
        this.state.works.push("Work1");
        this.setState({works: this.state.works});
        console.log(this.state.works);
    }
    render ()  {
        return(
            <>
                <button onClick={this.addList}> get </button>;;;;
                <ul>
                    {
                        this.state.works.map(works => <li>{works}</li>)
                    }
                </ul>
            </>
        )
    }  
}
export default PortfolioPage;