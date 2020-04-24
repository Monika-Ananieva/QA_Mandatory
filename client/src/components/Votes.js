import React, { Component } from 'react';
import {Button, Container} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faChevronUp);

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
                <Button onClick={(event) => this.handleButtonClick(event)} type="submit" className="btn">
                    <FontAwesomeIcon icon="chevron-up" />
                </Button>
            </div>
        );

    }

}

export default Votes;
