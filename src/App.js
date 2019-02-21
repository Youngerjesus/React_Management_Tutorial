import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// main 자바스크립트 body내용을 다루는 부분 
// 화면 내용출력을 담당하는 부분
class App extends Component {
  render() {
    return (
      <div className="grey-background ">
        <img src ={logo} lat = "logo"/>
        <h2> develope management program </h2>

      </div>
    );
  }
}

export default App;
