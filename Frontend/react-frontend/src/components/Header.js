import React from 'react';

import { Link } from 'react-router-dom'
import { AreaHeader } from './HeaderStyled';
import './Header.css';


export default () => {
    return(
        <AreaHeader>
        
            <div className= "container">
                <div className= "logo">
                <a href= "/">
                    <img src= "https://www.pinclipart.com/picdir/big/94-944572_07-oct-online-penny-autions-deemed-to-be.png" alt="Logo"></img>
                </a>
            </div>
            
            <nav>
                <ul>
                    <li><Link to= "/">Início</Link></li>
                    <li><Link to= "/config">Configurações</Link></li>
                    <li><Link to= "/list">Feedback</Link></li>
                    <li><Link to= "/logout">Sair</Link></li>
                </ul>
            </nav>
            </div>
        
        </AreaHeader>
    );
}