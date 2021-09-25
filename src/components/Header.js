import React from "react";
import styled from "styled-components";
import Logo from "media/icon/logo.svg";
import Cart from "media/icon/Cart.svg";
import Heart from "media/icon/Heart.svg";
import { history } from "redux/configureStore";

const Header = (props) => {
  return (
    <Container>
      <LogoWrap>
        <HeaderLogo
          onClick={() => {
            history.push("/");
          }}
        />
      </LogoWrap>
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
      <NavMine>
        <MineTab logo={Heart} />
        <MineTab
          onClick={() => {
            history.push("/cart");
          }}
          logo={Cart}
        />
      </NavMine>
    </Container>
  );
};

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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  margin-bottom: 30px;
  height: 70px;
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
  width: 700px;
  display: flex;
  justify-content: space-between;
  gap: 0px 50px;
  align-items: center;
`;

const Tab = styled.a`
  cursor: pointer;
  padding: 20px 10px;
  font-weight: 600;
  font-size: 20px;
  color: black;
`;

export default Header;
