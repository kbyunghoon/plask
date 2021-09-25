import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Fillstar } from "media/icon/FillStar.svg";
import { ReactComponent as Arrow } from "media/icon/Arrow.svg";
import { product } from "dummy_data/category";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART } from "redux/modules/cart";
import Swal from "sweetalert2";

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const test = useSelector((state) => state.cart.data);

  useEffect(() => {
    for (const idx in product) {
      const find = product[idx].findIndex((p) => p.id === parseInt(params.id));
      if (find !== -1) {
        setData(product[idx][find]);
      }
    }
  }, [params.id]);

  const addcart = () => {
    dispatch(ADD_CART({ ...data, number: 1 }));
  };

  return (
    <Wrap>
      <ProductImg source={data && data.img} />
      <DetailWrap>
        <DetailContainer>
          <Line1>
            <FreeDelivery>무료배송</FreeDelivery>
            <Star>
              <Fillstar />
              {data && data.star}
            </Star>
          </Line1>
          <ProductName>{data && data.product}</ProductName>
          <Line2>
            <Discount>{data && data.discount}</Discount>
            <DiscountBefore>{data && data.beforeprice}</DiscountBefore>
          </Line2>
          <Price>{data && data.price}</Price>
          <Coupon>
            회원가입 시 10% 할인!
            <Arrow />
          </Coupon>
        </DetailContainer>
        <ButtonWrap>
          <CartButton onClick={addcart}>장바구니 담기</CartButton>
          <BuyButton
            onClick={() =>
              Swal.fire({
                icon: "error",
                title: "준비 중입니다.",
                confirmButtonText: '확인',
              })
            }
          >
            구매하기
          </BuyButton>
        </ButtonWrap>
      </DetailWrap>
    </Wrap>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px auto;
  margin-bottom: 20px;
  width: 350px;
`;

const CartButton = styled.button`
  user-select: none;
  cursor: pointer;
  font-family: "paybooc-Bold";
  color: #ffffff;
  font-size: 1rem;
  width: 150px;
  height: 50px;
  background-color: #5b57ff;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid;
  border-color: #5b57ff;
  border-radius: 5px;
`;

const BuyButton = styled.button`
  user-select: none;
  cursor: pointer;
  font-family: "paybooc-Bold";
  color: #ffffff;
  font-size: 1rem;
  width: 150px;
  height: 50px;
  background-color: #5b57ff;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid;
  border-color: #5b57ff;
  border-radius: 5px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  justify-content: center;
`;

const DetailWrap = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: space-between;
`;

const Coupon = styled.div`
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  border: 1.5px solid #55cbf9;
  border-radius: 5px;
  padding: 5px 5px;
  align-items: center;
  justify-content: space-between;
  & > svg {
    transform: rotate(90deg);
    margin-right: 10px;
    /* width: 10px;
    height: 10px; */
  }
`;

const Price = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: "SBAggroB";
`;

const Discount = styled.div`
  font-weight: 600;
  color: red;
  display: flex;
  margin-right: 5px;
`;

const DiscountBefore = styled.div`
  text-decoration: line-through;
  font-weight: 600;
  color: #b0b0b0;
  display: flex;
  margin-right: 5px;
`;

const Line2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Line1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProductImg = styled.div`
  background-image: url(${(props) => props.source});
  height: 400px;
  width: 400px;
  border-radius: 5px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 5px;
  margin-right: 20px;
`;

const ProductName = styled.h1`
  font-family: "SBAggroM";
  font-size: 30px;
`;

const FreeDelivery = styled.div`
  color: #726969;
  font-size: 13px;
`;

const Star = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

export default Detail;
