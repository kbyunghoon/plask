import React from "react";
import styled from "styled-components";
import Logo from "media/icon/logo.svg";
import Cart from "media/icon/Cart.svg";
import Heart from "media/icon/Heart.svg";
import { history } from "redux/configureStore";
import Swal from "sweetalert2";

const MobileHeader = (props) => {
  return (
    <Container>
      <Wrap>
        <LogoWrap>
          <HeaderLogo
            onClick={() => {
              history.push("/");
            }}
          />
        </LogoWrap>
        <NavMine>
          <MineTab
            onClick={() =>
              Swal.fire({
                icon: "error",
                title: "준비 중입니다.",
                confirmButtonText: "확인",
              })
            }
            logo={Heart}
          />
          <MineTab
            onClick={() => {
              history.push("/cart");
            }}
            logo={Cart}
          />
        </NavMine>
      </Wrap>
      <MenuNav>
        <Tab
          onClick={() => {
            history.push("/category/new");
          }}
        >
          New Releases
        </Tab>
        <Tab
          onClick={() => {
            history.push("/category/men");
          }}
        >
          Men
        </Tab>
        <Tab
          onClick={() => {
            history.push("/category/women");
          }}
        >
          Women
        </Tab>
        <Tab
          onClick={() => {
            history.push("/category/kids");
          }}
        >
          Kids
        </Tab>
        <Tab
          onClick={() => {
            history.push("/category/sale");
          }}
        >
          Sale
        </Tab>
      </MenuNav>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MineTab = styled.a`
  cursor: pointer;
  display: flex;
  background: url("${(props) => (props.logo ? props.logo : "")}") no-repeat;
  height: 34px;
  width: 39px;
  background-size: 70% 70%;
  overflow: hidden;
  text-indent: -999px;
  background-position: center;
`;

const LogoWrap = styled.h1`
  display: flex;
  margin-left: 30px;
`;

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  margin-bottom: 30px;
  margin-top: 20px;
  @media only screen and (min-width: 801px) {
    display: none;
  }
`;

const HeaderLogo = styled.a`
  cursor: pointer;
  display: flex;
  background: url("${Logo}") no-repeat;
  height: 19px;
  width: 130px;
  background-size: 100% 100%;
  overflow: hidden;
  text-indent: -999px;
`;

const NavMine = styled.nav`
  display: flex;
  margin-right: 30px;
  gap: 0px 10px;
`;

const MenuNav = styled.nav`
  width: calc(100% - 50px);
  display: flex;
  justify-content: space-between;
  gap: 0px 10px;
  align-items: center;
  @media only screen and (max-width: 400px) {
    font-size: 3vw;
    width: 95%;
  }
`;

const Tab = styled.a`
  cursor: pointer;
  padding: 20px 10px;
  font-weight: 600;
  color: black;
  user-select: none;
  text-align: center;
`;

export default MobileHeader;
