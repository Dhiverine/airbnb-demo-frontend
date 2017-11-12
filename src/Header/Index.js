import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo.svg";
import iconloupe from "./iconloupe.svg";

const Header = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 976px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Search = styled.footer`
  display: flex;
  align-items: center;
`;

const InLineLink = styled.a`
  font-family: "Circular-Air-Light";
  line-height: 24px;
  font-size: 14px;
  text-align: left;
  color: #636363;
  margin-left: 10px;
  margin-right: 5px;
  text-decoration: none;
  /*justify-content: space-between;*/
`;
const Right = styled.div`
  margin-top: 10px;
  width: 33.3333%;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  /*flex: wrap;*/
  /*align-items: left;
  display: inline-block;*/
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
const Input = styled.input.attrs({
  type: "search"
})`
  width: 392px;
  height: 48px;
  padding-left: 52px;
  margin-left: 50px;
  line-height: 24px;
  font-size: 16px;
  font-family: "Circular-Air-Light";
  background-image: url(${iconloupe});
  background-repeat: no-repeat;
  background-position: 12px center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  @media only screen and (max-width: 1200px) {
    margin-left: 34px;
  }
`;

export default function() {
  return (
    <Header>
      <Left>
        <Search>
          <img src={Logo} alt="Logo" />
          <Input placeholder="Try &quot;Miami&quot;" />
        </Search>
      </Left>
      <Right>
        <InLineLink href="">Become a host</InLineLink>
        <InLineLink href="">Help</InLineLink>
        <InLineLink href="">Sign Up</InLineLink>
        <InLineLink href="">Log In</InLineLink>
      </Right>
    </Header>
  );
}
