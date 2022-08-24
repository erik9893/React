/*eslint-disable*/
import React, {useState} from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState (['남자 코트 추천','강남 우동 맛집', '강남 우동 맛집']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉변경( 따봉 + 1 ) } } >👍</span> { 따봉 }</h4>
        <p>8월 24일 발행</p>
        <hr/>
      </div>
      
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>8월 23일 발행</p>
        <hr/>
      </div>
      
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>8월 22일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
