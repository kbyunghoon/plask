import { product } from "dummy_data/category";
import React from "react";
import styled from "styled-components";
import Cart from "./Cart";

const Carts = () => {
  const data = product[0];
  console.log(data);

  return (
    <Wrap>
      <Name>홍길동님 장바구니</Name>
      {data.map((p, idx) => {
        return <Cart {...p} />;
      })}
    </Wrap>
  );
};

const Name = styled.div`
  font-weight: 600;
  font-family: "AppleSDGothicNeoSB";
  font-size: 30px;
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  display: flex;
  width: 1000px;
  margin: 0px auto;
  flex-direction: column;
`;

export default Carts;
