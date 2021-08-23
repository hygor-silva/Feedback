import React, { useState } from "react";
import './App.css';
import './API';


export default () => {


const [feedback, setFeedback] = useState([]);


  const loadAll = async () => {
    //Pegando toda a lista
    let list = await API.getFeedback();
    setFeedback(list);

  }
  loadAll();



};
