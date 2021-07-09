
import { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

// Bootstrap-import
import { Button } from 'react-bootstrap';

// styled-components-import
import styled from 'styled-components';

let 박스 = styled.div`
  padding : 20px;
`;

let 타이틀 = styled.h2`
  font-size : 48px;
`;

function Detail(props) {

  let { id } = useParams();  // id : /:id 자리에 사용자가 입력한 값
  let history = useHistory();
  // find() : Array 안에서 원하는 자료를 찾고싶을 때 사용한다
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id
  });
  
  return (
    <div className="container">
      <박스>
        <타이틀>Detail</타이틀>
      </박스>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <Button variant="outline-danger" onClick={() => {history.goBack()}}>뒤로가기</Button>{' '}
          <Button variant="outline-success">주문하기</Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default Detail;
