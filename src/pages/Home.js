import React from "react";
import styled from "styled-components";
import Img1 from "media/image/1.png";
import Img2 from "media/image/6.png";
import Img3 from "media/image/8.png";
import Img4 from "media/image/9.png";
import Img5 from "media/image/10.png";
import { history } from "redux/configureStore";

const Home = () => {
  return (
    <Container>
      <LeftDiv>
        <ProductImg
          onClick={() => {
            history.push("/category/new");
          }}
          height="600"
          width="274"
          source={Img1}
        >
          <TextCover>
            <Text>New Releases</Text>
            <Text>-</Text>
            <Text>2021년 새로운 아이템</Text>
          </TextCover>
        </ProductImg>
      </LeftDiv>
      <RightDiv>
        <ProductImg
          onClick={() => {
            history.push("/category/men");
          }}
          height="290"
          width="290"
          source={Img2}
        >
          <TextCover>
            <Text>Men</Text>
            <Text>-</Text>
            <Text>남성을 위한 아이템</Text>
          </TextCover>
        </ProductImg>
        <ProductImg
          onClick={() => {
            history.push("/category/women");
          }}
          height="290"
          width="290"
          source={Img3}
        >
          <TextCover>
            <Text>Women</Text>
            <Text>-</Text>
            <Text>여성을 위한 아이템</Text>
          </TextCover>
        </ProductImg>
        <ProductImg
          onClick={() => {
            history.push("/category/kids");
          }}
          height="290"
          width="290"
          source={Img4}
        >
          <TextCover>
            <Text>Kids</Text>
            <Text>-</Text>
            <Text>아이를 위한 아이템</Text>
          </TextCover>
        </ProductImg>
        <ProductImg
          onClick={() => {
            history.push("/category/sale");
          }}
          height="290"
          width="290"
          source={Img5}
        >
          <TextCover>
            <Text>Sale</Text>
            <Text>-</Text>
            <Text>이번 달 할인 상품</Text>
          </TextCover>
        </ProductImg>
      </RightDiv>
    </Container>
  );
};

const LeftDiv = styled.div``;

const RightDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  align-items: center;
  justify-items: center;
`;

const TextCover = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
`;

const Container = styled.div`
  width: 900px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ProductImg = styled.div`
  cursor: pointer;
  background-image: url(${(props) => props.source});
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: 5px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  :hover {
    background-size: 120%;
    background-position: 50%;
  }
  ${(props) => `& > div {
    height: 100%;
    width: 100%;
  }`}
`;

export default Home;
