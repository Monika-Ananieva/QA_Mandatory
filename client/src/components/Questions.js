import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group";


class Questions extends Component {

    constructor(props) {
        super(props);
        //This is a state we save our variables into questions
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        this.getQuestions().then();
    }

    //This function gets questions and then returns them as json
    async getQuestions(){
        //defining the route and saving it in url
        let url = 'api/questions';
        //we fetch the data using the url and then we save the result into the result variable
        let result = await fetch(url);
        //here we convert the data into json format
        let json = await result.json();
        //here we set the state variable called questions to the json data result
        return this.setState({
            questions: json
        })
    }

    async addQuestion(name){
        let url = 'api/questions/add';
        let response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: name
            })
        });
        //let data = await response.json();
        await this.getQuestions();
    }

    render() {
        const { questions } = this.state;
        return(
            <Container>
                <h1>Browse current questions:</h1>
                <ListGroup>
                    <TransitionGroup>
                        {questions.map(q => (
                            <CSSTransition key={q._id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Link to={`/${q._id}`}>{q.name}</Link>
                                </ListGroupItem>
                            </CSSTransition>

                        ))}
                    </TransitionGroup>
                </ListGroup>

                <Button
                    color="dark"
                    style={{marginTop: '2rem'}}
                    onClick={() =>{
                        const name = prompt('Enter a Question');
                        if(name) {
                            this.addQuestion(name).then();
                        }
                    }}
                >Add a new question
                </Button>
            </Container>
        );
    }
}

export default Questions;