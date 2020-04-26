import React, {Component} from 'react';
import { Router } from '@reach/router';
import AppNavbar from "./components/AppNavbar";
import Questions from "./components/Questions";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Question from "./components/Question";

class App extends Component {

  constructor(props) {
    super(props);
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

  getQuestion(id){
    return this.state.questions.find(q => q._id === id);
  }

  render () {
    return(
    <div className="App">
      <AppNavbar />
      <Router>
        <Questions path="/" />
        <Question path="/:id" getQuestion={id => this.getQuestion(id)} />
      </Router>
    </div>); }
}

export default App;
