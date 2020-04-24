import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Votes from './Votes'


class Question extends Component {

    constructor(props) {
        super(props);
        //This is a state we save our variables into answers
        this.state = {
            answers: [],
            votes: []
        }
    }

    componentDidMount() {
        this.getAnswers().then();
        this.getAllVotes().then();
    }

    async getAllVotes()
    {
        let url = 'api/votes/';
        let result = await fetch(url);
        let json = await result.json();
        return this.setState({
            votes: json
        });
    }

    getAnswersByRef(ref_id){
        return this.state.answers.find(a => a.id === ref_id);
    }

    async getAnswers(){
        //defining the route and saving it in url
        let url = 'api/answers';
        //we fetch the data using the url and then we save the result into the result variable
        let result = await fetch(url);
        //here we convert the data into json format
        let json = await result.json();
        //here we set the state variable called answers to the json data result
        return this.setState({
            answers: json
        })
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
        await this.getAnswers();
    }

    async addVote(refId){
        let url = 'api/votes/add';
        let response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                ref_id: refId
            })
        });
        let data = await response.json();
    }

    render() {
        const { answers } = this.state;
        const question = this.props.getQuestion(this.props.id);
        let content = <p>Loading</p>;
        if(question) {
            content =
                <Container>
                    <Link to="/" className="back">Go Back</Link>
                    <h1>{question.name}</h1>

                    <ListGroup>
                        <TransitionGroup>
                            {answers.filter((answer) => answer.ref_id === this.props.id).map(a => (
                                <CSSTransition key={a._id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <div className="row">
                                            <div className="col-lg-1">
                                                <p className="vote-number">{this.state.votes.filter((v) => v.ref_id === a._id).map(v => v._id).length }</p>
                                                <Router>
                                                    <Votes path="/" votes={this.state.votes} addVote={() => this.addVote(a._id)}></Votes>
                                                </Router>
                                            </div>

                                            <div className="col-lg-11">
                                                <p>{a.answer}</p>
                                            </div>
                                        </div>


                                    </ListGroupItem>
                                </CSSTransition>

                            ))}
                        </TransitionGroup>
                    </ListGroup>

                    <Button
                        color="dark"
                        style={{marginTop: '2rem', marginBottom: '2rem'}}
                        onClick={() => {
                            const answer = prompt('Enter an Answer');
                            if (answer) {
                                this.addAnswer(answer).then();
                            }
                        }}
                    >Add an Answer
                    </Button>
                    <br/>

                </Container>
        }
        return content;
    }
}


export default Question;