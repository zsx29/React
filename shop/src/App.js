/*eslint-disable*/ 
import { useState } from 'react';
import './App.css';
import Data from "./data.js";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Jumbotron
} from "react-bootstrap";
import data from './data.js';

/*

    ※ export / import
      - 내보내기 : export default 변수명
      - 내보내기 : export{ 변수1, 변수2, ...}
      - 가져오기 : import 변수명(자유롭게 작명) from 경로
      - 한번만 사용할 수 있다.

    ※ map
      1. 자료.map((a, i) => {]})
        - 자료.length만큼 반복문을 돌려라!
        - map함수를 쓸 때 a, i 파라미터를 사용할 수 있다
        - a : 데이터 안에있는 하나하나의 데이터
        - i : 반복문을 돌릴 때 마다 0, 1, 2, 3 ...이 되는 정수이다.
      2. return (반복시킬 HTML);
      3. 반복하며 변해야하는 숫자체크
    
    ※ props 전송법
      1. <자식컴포넌트 보낼이름 = { 전송할state }/>
      2. function 자식컴포넌트(props){}
      3. props.보낼이름 사용

*/

function App() {

  let [shoes, shoesCh] = useState(Data);


  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="nav">
          <Navbar.Brand href="#home">PogbaShoes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
      <div className="AppMain">
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
      </div>
    </div>
  );
}

function Card(props) {
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) +'.jpg'} width="100%"></img>
      <h4><b>{props.shoes.title}</b></h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
    </div>
  );
}

export default App;
