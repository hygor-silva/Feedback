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
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </ContainerPage>

    );
}
export default Page;






