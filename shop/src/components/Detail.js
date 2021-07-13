
import { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import "./Detail.scss"

// Bootstrap-import
import { Button } from 'react-bootstrap';

// styled-components-import
import styled from 'styled-components';


let 박스 = styled.div`
  padding : 20px;
`;

let 타이틀 = styled.h2`
  font-size : 36px;
`;

function Detail(props) {

  let { id } = useParams();  // id : /:id 자리에 사용자가 입력한 값
  let history = useHistory();
  

  // find() : Array 안에서 원하는 자료를 찾고싶을 때 사용한다  
  let findItem = props.shoes.find(function (item) {
    return item.id == id
  })

  // alert 2초후에 자동꺼짐
  let [alert, SetAlert] = useState(false);
  useEffect(() => {
    
    var timer = setTimeout(() => {
      { SetAlert(true) }
    }, 1200);
    return () => {
      clearTimeout(timer)
    }
  }, [alert])

  return (
    <div className="container">
      <박스>
        <타이틀>Detail</타이틀>
      </박스>
      {
        alert === true
        ? <Alert></Alert>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+ (findItem.id + 1) +".jpg"} width="100%"/>
          <hr/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}원</p>
          <Button variant="outline-danger" onClick={() => {history.goBack()}}>뒤로가기</Button>{' '}
          <Button variant="outline-success">주문하기</Button>{' '}
        </div>
      </div>
    </div>
  );
}

function Alert(params) {

  return(
    <div className="my-alert">
      <p>😢재고소진😢</p>
    </div>
    
  );
}

export default Detail;
