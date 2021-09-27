import React from "react";
import styled from "styled-components";

const Footer = () => {
  const navTab = ["이용약관", "개인정보처리방침", "인재채용", "입점/제휴 문의"];
  const firstLine = [
    "사업자 등록번호:123-45-67890",
    "대표 : 홍길동",
    "통신판매업신고 : 2021-서울강남-123456",
  ];
  const secondLine = [
    "호스팅 사업자: (주)라우트육십오",
    "주소 : 04958 서울특별시 강남구 역삼동 선릉로 552 새롬빌딩 5F",
  ];

  return (
    <FooterWrap>
      <Nav>
        {navTab.map((p, idx) => {
          if (idx === 0) {
            return <NavLink first={true}>{p}</NavLink>;
          } else {
            return <NavLink>{p}</NavLink>;
          }
        })}
      </Nav>
      <AddressWrap>
        <CompanyInfo>
          <About>(주)라우트육십오</About>
          <InfoWrap>
            <InfoPart>
              {firstLine.map((p, idx) => {
                if (idx === 0) {
                  return <Info first={true}>{p}</Info>;
                } else {
                  return <Info>{p}</Info>;
                }
              })}
            </InfoPart>
            <InfoPart>
              {secondLine.map((p, idx) => {
                if (idx === 0) {
                  return <Info first={true}>{p}</Info>;
                } else {
                  return <Info>{p}</Info>;
                }
              })}
            </InfoPart>
          </InfoWrap>
        </CompanyInfo>
      </AddressWrap>
    </FooterWrap>
  );
};

const Info = styled.span`
  font-style: normal;
  @media only screen and (min-width: 681px) {
    ${(props) =>
      props.first
        ? ""
        : `
  ::before {
    content: "|";
    margin: 0px 10px;
  }`}
  }
`;

const InfoPart = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div``;

const About = styled.h1`
  user-select: none;
  font-size: 20px;
  font-style: normal;
`;

const CompanyInfo = styled.div``;

const AddressWrap = styled.address`
  padding: 20px 16px 0;
`;

const NavLink = styled.a`
  cursor: pointer;
  :hover {
    font-weight: 600;
  }
  ${(props) =>
    props.first
      ? ""
      : `
  ::before {
    content: "|";
    margin: 0px 10px;
  }`}
`;

const Nav = styled.nav`
  margin-left: 20px;
`;

const FooterWrap = styled.footer`
  margin-top: 100px;
  font-family: "AppleSDGothicNeoR";
  z-index: 99;
  background-color: #f7f8fa;
  position: absolute;
  position: relative;
  z-index: 11;
  width: 100%;
  padding: 15px 0;
  height: 200px;
  border-top: 1px solid #e8e8e8;
`;

export default Footer;
