import React from "react";
import { ReactComponent as Fillstar } from "media/icon/FillStar.svg";
import styled from "styled-components";
import { history } from "redux/configureStore";

const Product = (props) => {
  const gotoDetail = () => {
    history.push(`/product/${props.id}`);
  };
  return (
    <ProductWrap onClick={gotoDetail}>
      <ProductImg source={props.img} />
      <FreeDelivery>무료배송</FreeDelivery>
      <ProductName>{props.product}</ProductName>
      <Box>
        <Discount>{props.discount}</Discount>
        <Price>{props.price.toLocaleString("ko-KR")}원</Price>
      </Box>
      <Star>
        <Fillstar />
        {props.star}
      </Star>
    </ProductWrap>
  );
};

const ProductWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ProductImg = styled.div`
  background-image: url(${(props) => props.source});
  height: 250px;
  width: 250px;
  border-radius: 5px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 5px;
  background-size: 100%;
  transition: 0.5s ease-in-out;
  :hover {
    background-size: 110%;
    background-position: 50%;
  }
`;

const FreeDelivery = styled.div`
  color: #726969;
  font-size: 13px;
`;

const ProductName = styled.div`
  font-weight: 600;
  display: flex;
  margin: 5px 0px;
`;

const Discount = styled.div`
  font-weight: 600;
  color: red;
  display: flex;
  margin-right: 5px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

const Price = styled.div`
  display: flex;
  font-weight: bold;
`;

const Star = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

export default Product;
