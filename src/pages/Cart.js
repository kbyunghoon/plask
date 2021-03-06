import React from "react";
import styled from "styled-components";
import Trash from "media/icon/Trash.svg";
import { DEL_CART } from "redux/modules/cart";
import { useDispatch } from "react-redux";

const Cart = (props) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(DEL_CART(props.id));
  };

  return (
    <CartWrap>
      <CartBox>
        <ProductImg source={props && props.img} />
        <DetailWrap>
          <ProductWrap>
            <ProductName>{props && props.product}</ProductName>
            <FreeDelivery>무료배송</FreeDelivery>
          </ProductWrap>
          <Price>
            가격&nbsp;
            <PriceInfo>
              {props && props.price.toLocaleString("ko-KR")}원
            </PriceInfo>
            &nbsp;할인 ({props && props.discount} 적용)
          </Price>
        </DetailWrap>
      </CartBox>
      <TrashLogo onClick={deleteProduct} logo={Trash} />
    </CartWrap>
  );
};

const TrashLogo = styled.a`
  cursor: pointer;
  background: url("${(props) => (props.logo ? props.logo : "")}") no-repeat;
  width: 22px;
  height: 26px;
  margin-right: 20px;
  background-size: 80%;
  @media only screen and (max-width: 1100px) {
    margin-right: 0px;
  }
`;

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceInfo = styled.div`
  font-family: "AppleSDGothicNeoM";
  color: #4d6eba;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-family: "AppleSDGothicNeoUL";
  align-items: center;
  @media only screen and (max-width: 450px) {
    font-size: 3vw;
  }
`;

const FreeDelivery = styled.div``;

const ProductName = styled.div`
  font-size: 20px;
  font-weight: 600;
  @media only screen and (max-width: 450px) {
    font-size: 4vw;
  }
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;
`;

const CartWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 15px 0px;
  width: 100%;
`;

const CartBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProductImg = styled.div`
  margin-right: 10px;
  background-image: url(${(props) => props.source});
  height: 150px;
  width: 150px;
  border-radius: 5px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 5px;
`;

export default Cart;
