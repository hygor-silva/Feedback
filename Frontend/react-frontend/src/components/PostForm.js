import React from "react";
import axios from 'axios';
import '../services/FeedbackServices'

export default class PostForm extends React.Component {
    state = {
        feedback: '',
    }
    handleSubmit = event => {
        this.preventDefault();

        const feedback = {
            feedback: this.state.feedback
        };

        axios.post(`http://localhost:8080/feedback`, {feedback}).then(res => {
            console.log(res);
            console.log(res.data);
            console.log("leu até aqui");
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Feedback:
                        <input type= "text" feedback="feedback" onChange={this.handleChange} />
                        
                    </label>
                    <button type="submit">Add </button>
                    

                </form>
            </div>
        )
    }
}