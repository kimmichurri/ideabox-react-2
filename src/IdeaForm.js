import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class IdeaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }

    handleChange = (e) => {
        //event is how we have access to the value from the inputs
        console.log(e.target)
        const { name, value } = e.target
        this.setState({
            [name]: value
            //you need name in the brackets so that a key of "name" isn't created but instead you have a dynamic key assignment
            //check out the input attributes to see what is happening with each input
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addIdea(this.state)
        //on app you are passing in an idea with title and body which is equivalent to state in this component
    }

    //onSubmit on the form allows user to click enter or type submit to submit the new idea

    render() {
        return (
            <form className="idea-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    name="body" 
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <button>Add Idea</button>
            </form>
        )
    }
}

IdeaForm.propTypes = {
    addIdea: PropTypes.func.isRequired
}