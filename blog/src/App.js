import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, 글제목변경] = useState(['남자 코트 추천', '엽떡 맛집', '닭한마리 맛집']);

  let posts = '강남 고기 맛집'

  let blogStyle = {color: 'blue', fontSize: '30px'}

  function test() {
    return 100
  }



  return (
    <div className="App">
      <div className='black-nav'>
        <div style={blogStyle}>개발 blog</div>
      </div>
      <div className="list">
        <h3> {title[0]} </h3>
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
