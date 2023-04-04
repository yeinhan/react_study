/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, 글제목변경] = useState(['남자 코트 추천', '엽떡 맛집', '닭한마리 맛집']);
  let [thumbsUp, plusThumbsUp] = useState(1)
  let posts = '강남 고기 맛집'

  let blogStyle = {color: 'blue', fontSize: '30px'}

  function 제목바꾸기(){
    let newArray = [...title];
    newArray[0] = "여자코트 추천";
    글제목변경( newArray);
  }

  function changeTitleOrder(){
    let changeArray = [...title];
    changeArray.reverse();
    글제목변경(changeArray)
  }

  

 
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={blogStyle}>개발 blog</div>
      </div>
      <button onClick={ changeTitleOrder }>제목순서변경</button>
      <div className="list">
        <h3> {title[0]} <span onClick={() => plusThumbsUp(thumbsUp + 1) }>👍</span> {thumbsUp} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[1]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[2]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

    <Modal/>


    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
    <h2>제목</h2>
    <p>날씨</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
