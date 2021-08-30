import { React, useState } from 'react';
import { ContainerPage, TitlePage } from '../../components/Main';
import axios from 'axios';
import '../../services/FeedbackServices'


const Page = () => {
    return (
        <ContainerPage>
            <TitlePage>Seja bem vindo!</TitlePage>
            <TitlePage>Deixe seu feedback abaixo.</TitlePage>

            <form>
                <label>
                    Feedback:
                    <input type="text" name="feedback" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </ContainerPage>

    );
}
export default Page;






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