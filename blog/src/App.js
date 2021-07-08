/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

/*

  1. state
    - 변수 대신 쓰는 데이터 저장공간
    - useState()를 이용해서 만들어야한다.
    - state는 UI의 현재상태를 보관하는 저장소역할
    - state 데이터는 =(등호)로 직접 수정하지 말것!
  
  2. state 생성하는 방법
    - 상단에 {useState} 라이브 러리를 추가해준다.
    - let[a, b] = useState("남자 코트 추천")
    - a : "남자 코트 추천"
    - b ; "남자 코트 추천" 을 변경하는 함수가 들어가 있다.
 
  3. state에 데이터를 저장하는 이유
    - Web이 App처럼 동작하게 만들고 싶어서 그렇다.
    - state는 변경이 되면 HTML이 자동으로 재렌더링이 된다.  
    - 새로고침 없이도 부드럽게 변경이 되기 때문이다.
    - 중요한 데이터는 반드시 state에 넣어준다
    - 자주 바뀌는, 중요한 데이터를 변수 말고 state에 저장해서 사용한다.

  4. state 수정
    - 복사본을 만들어서 수정하라(deep copy)

  5. Componnent 문법
    - HTML을 한 단어로 줄여서 쓸 수 있는 방법이다.
    - 반드시 대문자로 시작을 한다.
    - 소괄호 안에다가 HTML 문법을 사용한다.
    - 반복적으로 출현하는것은 Componnent로 묶어준다.

  6. Modal
    - 리액트에선 UI를 만들 떄 state 데이터를 이용한다.

  7. Map(반복문)
    - array 내의 모든 데이터에 똑같은 작업을 시켜주고 싶을 때 .map()
    - 사용방법
      = {
          반복할데이터.map((a) => { 
            return <HTML문석> 
            }
          )
        }
        a : array 안에 있던 하나하나의 데이터를 의미한다.
    - map 반복문으로 돌린 HTML에는 key={}가 필요하다(warning이 생기지 않는다)

  8. props
    - props로 전송해줘야 자식 컴포넌트는 부모 컴포넌트가 가진 state 사용가능
    - 사용방법
      1. <자식컴포넌트 작명 = {state명}/>
      2. 자식컴포넌트에서 props 파라미터 입력 후 사용

  9. 각각 다른 모달창 제목 띄우는법
    - 몇번째 제목을 눌렀는지 상태정보를 state에 저장하고
      state가 0일때 0번째 제목 출력
      state가 1일때 1번째 제목 출력...

  10. UI만드는 법 :
      1. UI와 관련된 중요 정보들을 state로 저장해놓고
      2. state에 따라서 UI가 수정되게 만들면 된다.

  11. input
    - 사용자가 input에 입력한 값을 입력값 state로 저장한다

  12. 글 발행기능 만들기
    - (1) 사용자가 입력한 글 변수로 저장하기 (왜? 중요한 데이터니까)
    - (2) 저장버튼을 누르면 그 변수를 어디에 추가함
    - (3) 버튼을 누르면 입력한 글 state를 글제목 state에 추가
    
    

*/

// App Component - start
function App() {

  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "가을 여행지",
    "오늘 날씨가 어떤가요 ?",
  ]);
  let [tumbUp, tumbUpCh] = useState(0);
  let [modal, modalCh] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [input, inputCh] = useState();

  // 제목 바꾸기 함수
  function 제목바꾸기(parms) {
    var newArray = [...글제목]; //deep copy
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }

  // 순서 바꾸기 함수
  function 순서바꾸기(params) {
    var newChange = [...글제목];
    newChange[0] = "가을 여행지";
    newChange[1] = "오늘 날씨가 어떤가요?";
    newChange[2] = "남자 코트 추천";
    글제목변경(newChange);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <Profile></Profile>
      <hr/>
      <Profile2></Profile2>
      {
        글제목.map((글, i) => {
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{누른제목변경(i); modalCh(!modal)} }>{글}
                <span onClick={() => {tumbUpCh(tumbUp + 1);}}>&nbsp;👍</span>&nbsp;{tumbUp}
              </h3>
              <p>2월 27일 발행</p>
              <hr />
            </div>
          );

        })
      }
      {
        modal === true 
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
      <hr />

      <div className="publish">
        <h2>글쓰기</h2>
        <input onChange={(e) => { inputCh(e.target.value) }}/>
        <button className="btn" 
                onClick  ={()=>{
                  // 반드시 state 데이터는 =(등호)로 직접 수정하지 말것
                  var arraycopy = [...글제목];
                  arraycopy.unshift(input);  // unshift : ["맨앞에 추가" "???", "???"] push : ["???" "???", "맨뒤에 추가"]
                  if(confirm("작성하시겠습니까?")){
                    글제목변경(arraycopy);
                  }
                }}>저장
        </button>
      </div>
      {/* 입력값 받아보기 <input onChange={(e) => { inputCh(e.target.value) }}/>   */}


      <hr />
      {/* <button className="btn" onClick={()=>{modalCh(!modal)}}>모달</button> */}
      {/* <button onClick={제목바꾸기}>click</button> */}
      {/* <button className="btn" onClick={순서바꾸기}>change</button> */}
    </div>
  );
} // App Component - end

/*

  ※ 예전 component 작성하는 방법
    - class   : 변수/ 함수 보관하는 덩어리
    - extends : 오른쪽에 있는 놈의 성질을 물려받겠습니다.
    - state는 constructor 안에 작성한다.
    - constructor : class의 변수/초기값을 저장할 때 쓴다. 

*/

// 옛날 Component
class Profile extends React.Component{
  constructor(){
    super();
    this.state = { name : "박재형", age : 30 }
  }

  changeName = () => {
    this.setState({ name : "개똥싼"});
  }

  render(){
    return(
      <div>
        <h2>옛날컴포넌트</h2>
        <p>저는 { this.state.name }입니다</p>
        <p>나이는 { this.state.age }살 입니다</p>
        <button onClick={ this.changeName }>버튼</button>
      </div>
    );
  }
}

// 최신 Component
function Profile2(params) {
  let [name, nameCh] = useState(["박재형"]);
  let [age, ageCh] = useState(27);
  return(
    <div>
        <h2>최신컴포넌트</h2>
        <p>저는 {name}입니다</p>
        <p>나이는 {age}살 입니다</p>
        <button onClick={() => { nameCh("김산") }}>버튼</button>
      </div>
  );
}

// Modal Component
function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>제목</p>
      <p>내용</p>
    </div>
  );
}

export default App;
