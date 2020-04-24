import React, { Component } from 'react';

class Votes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: []
        }
    }

    handleButtonClick(event){
        this.props.addVote();
    }

    render(){

        return(
            <div>
                <input onClick={(event) => this.handleButtonClick(event)} type="submit" value="Upvote" className=""/>
            </div>
        );

    }

}

export default Votes;