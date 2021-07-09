/*eslint-disable*/ 

import './App.css';
import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom'

// Components-Grp
import Data   from './components/Data.js';
import Detail from './components/Detail.js';
import Card   from './components/Card.js';

// Bootstrap-import
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Jumbotron
} from "react-bootstrap";


/* 

  * export / import
    - 내보내기 : export default 변수명
    - 내보내기 : export{ 변수1, 변수2, ...}
    - 가져오기 : import 변수명(자유롭게 작명) from 경로
    - 한번만 사용할 수 있다.

  * map
    1. 자료.map((a, i) => {]})
      - 자료.length만큼 반복문을 돌려라!
      - map함수를 쓸 때 a, i 파라미터를 사용할 수 있다
      - a : 데이터 안에있는 하나하나의 데이터
      - i : 반복문을 돌릴 때 마다 0, 1, 2, 3 ...이 되는 정수이다.
    2. return (반복시킬 HTML);
    3. 반복하며 변해야하는 숫자체크
  
  * props 전송법
    1. <자식컴포넌트 보낼이름 = { 전송할state }/>
    2. function 자식컴포넌트(props){}
    3. props.보낼이름 사용

  * Router 의 훅 {
    1. Router (페이지 나누기)
      - react-router-dom 라이브러리 사용
      - 터미널 -> npm install react-router-dom
      - index.js -> import { BrowserRouter } from 'react-router-dom';
      - HashRouter    : 라우팅 안전하게 할 수 있게 도와줌, 사이트 주소 뒤에 #이 붙는데 #뒤에 적는 것은 서버로 전달 X
                        리액트가 알아서 해줄 수 있음
      - BrowserRouter : 라우팅을 리액트가 아니라 서버에게 요청할 수도 있어서 위험하다.  서버 : "어 그런페이지 없는데요?" 할 수 있음
                        서버에서 서버 라우팅 방지하는 API를 작성해둬야함
      - exact 라는 속성을 추가하면 경로가 정확히 일치할 때만 보여줌
      - React Router 특징 : 페이지마다 다른 HTML 파일이 아님(index.html 하나만 있음), 페이지 이동하기 흉내만 냄
      - <Route path="/:id"></Route>    /:id 모든문자라는 경로를 의미한다.
      - 콜론 뒤에 마음대로 작명가능, 여러개 사용가능
    
    2. Link (페이지 이동)
      - <Link to="경로"></Link>

    3. Switch (페이지 나누기)  
      - Router을 감싸주며 말그대로 스위치 역할을 한다. 하나가 켜지면 하나는 꺼지고

    4. useHistory (페이지 뒤로가기)
      - import { usehistory } from 'react-router-dom';
      - usehistory   : 방문기록 등을 저장해놓은 object
      - .goBack()    : 이전페이지 이동
      - .push('경로') : 해당 경로 페이지로 이동

    5. useParams (url 파라미터로 상세페이지 100개 만들기)
      - let { id } = useParams();  id : /:id 자리에 사용자가 입력한 값  
      - 파라미터는 2개 3개 몇개든 추가할 수 있습니다. /detail/:id/:name 이런 식도 가능합니다.
  * }

  * styled-components
    - import styled from 'styled-components';
    - 사용법 : let 작명 = styled.div``;
    - 미리 스타일을 만들어 놓은 컴포넌트를 사용한다.
    ? 선택사항이니 참고만 하자.
    ! 가장 큰 장점은 컴포넌트가 많아지면 class 겹칠 일이 줄어든다.

*/

function App() {

  let [shoes, shoesCh] = useState(Data);

  return (
    <div className="App">
      <div className="App-header">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="nav">
          <Navbar.Brand href="#home">PogbaShoes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="App-container">
        <Switch>
           
          <Route exact path="/">
            <Jumbotron className="background">
              <h1>Hello!</h1>
              <p>
                환영합니다.
                <br />
                부산이스케이프 입니다.
              </p>
              <p>
                <Button variant="primary">예약바로가기</Button>
              </p>
            </Jumbotron>
            <div className="container">
              <div className="row">
                {
                  // shoes 라는 데이터 갯수만큼 HTML을 생성해주세요~!
                  shoes.map((a, i) => {
                    return <Card shoes={ a } i={ i } key={i}/>
                  })
                }
              </div>
            </div> 
          </Route>

          <Route path="/detail/:id">
            <Detail shoes={ shoes }></Detail>
          </Route>

          <Route path="/:id"></Route>

        </Switch>
      </div>
    </div>
  );
} // App-end...

export default App;
