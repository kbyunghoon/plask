import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Swal from "sweetalert2";

const Carts = () => {
  const data = useSelector((state) => state.cart.data);

  let totalsum = 0;
  data.map((p) => {
    console.log(p.beforeprice);
    return (totalsum = totalsum + p.beforeprice);
  });

  let totaldiscount = 0;
  data.map((p) => {
    return (totaldiscount = totaldiscount + p.beforeprice - p.price);
  });

  let paypricesum = 0;
  data.map((p) => {
    return (paypricesum = paypricesum + p.price);
  });

  return (
    <Wrap>
      <Name>홍길동님 장바구니</Name>
      <CartContainer>
        <CartWrap>
          {data.length === 0 ? (
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              장바구니가 비어있습니다.
            </p>
          ) : null}
          {data.map((p) => {
            return <Cart {...p} />;
          })}
        </CartWrap>
        <PayWrap>
          <Price>
            <TotalPrice>
              총 상품금액
              <PriceText>{totalsum.toLocaleString("ko-KR")}원</PriceText>
            </TotalPrice>
            <TotalDelivery>
              총 배송비 <PriceText>0원</PriceText>
            </TotalDelivery>
            <TotalDiscount>
              총 할인금액
              <PriceText>{totaldiscount.toLocaleString("ko-KR")}원</PriceText>
            </TotalDiscount>
            <PayPrice>
              결제금액
              <PriceText>{paypricesum.toLocaleString("ko-KR")}원</PriceText>
            </PayPrice>
          </Price>
          <BuyButton
            onClick={() =>
              Swal.fire({
                icon: "error",
                title: "준비 중입니다.",
                confirmButtonText: "확인",
              })
            }
          >
            구매하기
          </BuyButton>
        </PayWrap>
      </CartContainer>
    </Wrap>
  );
};

const PayWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BuyButton = styled.button`
  margin-top: 20px;
  user-select: none;
  cursor: pointer;
  font-family: "paybooc-Bold";
  color: #ffffff;
  font-size: 1rem;
  width: 300px;
  height: 50px;
  background-color: #5b57ff;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid;
  border-color: #5b57ff;
  border-radius: 5px;
`;

const PriceText = styled.div`
  font-weight: 600;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TotalDelivery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TotalDiscount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PayPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Price = styled.div`
  font-family: "AppleSDGothicNeoL";
  font-size: 20px;
  background-color: #e3e3e380;
  border-radius: 5px;
  border: 1px solid #e3e3e380;
  padding: 30px 20px;
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CartWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-right: 10px;
  border-top: 1px solid;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1100px) {
    align-items: center;
    width: 100%;
  }
`;

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
  height: 600px;
  @media only screen and (max-width: 1100px) {
    align-items: center;
    width: 90%;
  }
`;

export default Carts;
