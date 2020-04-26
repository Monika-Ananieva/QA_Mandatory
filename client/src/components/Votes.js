import React, { Component } from 'react';
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faChevronUp);

class Votes extends Component {

    constructor(props) {
        super(props);
    }

    handleButtonClick(event){
        this.props.addVote();
    }

    render(){

        return(
            <div>
                <Button onClick={(event) => this.handleButtonClick(event)} type="submit" className="btn" data-testid="votes-button">
                    <FontAwesomeIcon icon="chevron-up" />
                </Button>
            </div>
        );

    }

}

export default Votes;
