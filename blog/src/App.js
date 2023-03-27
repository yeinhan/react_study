/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, 글제목변경] = useState(['남자 코트 추천', '엽떡 맛집', '닭한마리 맛집']);
  let [따봉, 따봉변경] = useState(0)
  let posts = '강남 고기 맛집'

  let blogStyle = {color: 'blue', fontSize: '30px'}

  function 제목바꾸기(){
    let newArray = [...title];
    newArray[0] = "여자코트 추천";
    글제목변경( newArray);
  }

  function 제목순서변경(){
    let changeArray = [...title];
    changeArray.reverse();
    글제목변경(changeArray)
  }

  

 
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={blogStyle}>개발 blog</div>
      </div>
      <button onClick={ 제목순서변경 }>버튼</button>
      <div className="list">
        <h3> {title[0]} <span onClick={() => 따봉변경(따봉 + 1) }>👍</span> {따봉} </h3>
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
    </div>
  );
}

export default App;
