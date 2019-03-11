import React, { Component } from 'react';
import IdeaForm from './IdeaForm';
import { IdeaContainer }  from './IdeaContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
      //we always want to set a new copy of the ideas array here which is why we use the spread operator
    }
    this.addIdea = this.addIdea.bind(this)
    //make sure you know this way as opposed to just writing arrow functions
  }

  addIdea (idea) {
    //you can use spread operator to give newIdea access to everything from the idea object you are passing in
    const newIdea = {...idea, id: Date.now()}
    this.setState({
      ideas: [...this.state.ideas, newIdea]
      //don't use push because it mutates and we don't want to mutate state!!!
    })
  }

  removeIdea = (id) => {
    // this works: 
    // const filteredIdeas = this.state.ideas.filter((idea) => {
    //   return idea.id !== id
    // })
    // ...but practice implicit return: 
    const filteredIdeas = this.state.ideas.filter((idea) =>  idea.id !== id)
    this.setState({ ideas: filteredIdeas })
  }

  // below here is another way to reset the state of ideas with ES6, practice using this (notice that 'ideas' is used twice):
  // removeIdea = (id) => {
    // const filteredIdeas = this.state.ideas.filter((idea) => {
    //   return idea.id !== id
    // })
  //   const ideas = this.state.ideas.filter((idea) =>  idea.id !== id)
  //   this.setState({ ideas })
  // }

  render() {
    const { ideas } = this.state
    return (
      <div className="App">
        <header>
          <h1>💡IdeaBox💡</h1>
          <IdeaForm addIdea={this.addIdea}/>
        </header>
        <IdeaContainer ideas={ideas} removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;
