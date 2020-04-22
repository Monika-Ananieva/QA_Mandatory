import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {v4 as uuid} from 'uuid';

class Question extends Component {

    constructor(props) {
        super(props);
        //This is a state we save our variables into answers
        this.state = {
            answers: []
        }
    }

    componentDidMount() {

    }


    async addAnswer(answer){
        let url = 'api/answers/add';
        let response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                answer: answer,
                ref_id: this.props.id
            })
        });
        let data = await response.json();
        //await this.getQuestions();
    }

    render() {
        const { answers } = this.state;
        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() =>{
                        const answer = prompt('Enter an Answer');
                        if(answer) {
                            this.addAnswer(answer).then();
                        }
                    }}
                >Add an Answer
                </Button>

                <ListGroup>
                    <TransitionGroup>
                        {answers.map(a => (
                            <CSSTransition key={a._id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {a.answer}
                                </ListGroupItem>
                            </CSSTransition>

                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default Question;