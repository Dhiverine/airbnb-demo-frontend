import React, { Component } from "react";
import styled from "styled-components";
import logoAirbnb from "./logoAirbnb.svg";
import iconTwitter from "./twitter.svg";
import iconFacebook from "./facebook.svg";
import iconInstagram from "./instagram.svg";
import arrow from "./arrow.svg";

const Footer = styled.footer`
  width: 976px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 65px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`;
const Locales = styled.div`padding-top: 50px;`;
const Left = styled.div``;
const Border = styled.div``;
const NavCol = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Navigation = styled.div`
  font-style: Book;
  font-size: 15px;
  line-height: 18px;
  align: Left;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 66.6667%;
  padding-top: 50px;
  flex: wrap;
`;
const BottomFoot = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 60px;
  box-sizing: border-box;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;
const LeftCorner = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const RightCorner = styled.div`
  width: 66.6667%;
  display: flex;
  justify-content: flex-end;
  /*flex: wrap;*/
  /*align-items: left;
  display: inline-block;*/
`;
const Link = styled.div`
  margin-top: 8px;
  color: #636363;
  font-size: 15px;
  line-height: 18px;
  align: left;
`;
const Title = styled.span`
  font-weight: bold;
  color: #383838;
  margin-bottom: 12px;
`;
const Select = styled.div`
  padding: 10px;
  font-family: "Circular-Air-Light";
  line-height: normal;
  font-size: 18px;
  color: #383838;
  width: 229px;
  height: 48px;
  appearance: none;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  margin-bottom: 16px;
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background: url(${arrow}) no-repeat 95% 50%;
`;
const InLineLink = styled.a`
  font-family: Circular-Air-Book;
  line-height: normal;
  font-size: 15px;
  text-align: left;
  color: #636363;
  margin-left: 20px;
  /*display: inline-block;*/
  /*vertical-align: middle;*/
  text-decoration: none;
  /*justify-content: space-between;*/
`;

const Social = styled.div``;

export default function() {
  return (
    <Footer>
      <Upper>
        <Left>
          <Locales>
            <Select name="language" id="languageSelect">
              <option value="first">English</option>
            </Select>
            <Select name="currency" id="currencySelect">
              <option value="first">United States dollar</option>
            </Select>
          </Locales>
        </Left>
        <Navigation>
          <NavCol>
            <Title>Airbnb</Title>
            <Link href="">About us</Link>
            <Link href="">Careers</Link>
            <Link href="">Press</Link>
            <Link href="">Policies</Link>
            <Link href="">Help</Link>
            <Link href="">Diversity & Belonging</Link>
          </NavCol>
          <NavCol>
            <Title>Discover</Title>
            <Link href="">Trust & Safety</Link>
            <Link href="">Travel & Credit</Link>
            <Link href="">Gift Cards</Link>
            <Link href="">Airbnb Citizen</Link>
            <Link href="">Business Travel</Link>
            <Link href="">Guidebooks</Link>
          </NavCol>
          <NavCol>
            <Title>Hosting</Title>
            <Link href="">Why Host</Link>
            <Link href="">Hospitality</Link>
            <Link href="">Resposible Hosting</Link>
            <Link href="">Community Center</Link>
          </NavCol>
        </Navigation>
      </Upper>
      <BottomFoot>
        <LeftCorner>
          <InLineLink href="#">
            <img src={logoAirbnb} alt="LogoAirbnb" />
          </InLineLink>
          <InLineLink href="#">
            <span> © Airbnb </span>
          </InLineLink>
        </LeftCorner>
        <RightCorner>
          <InLineLink href="">Terms</InLineLink>
          <InLineLink href="">Privacy</InLineLink>
          <InLineLink href="">Site map</InLineLink>
          <Social>
            <InLineLink href="#">
              <img src={iconFacebook} alt="Facebook" />
            </InLineLink>
            <InLineLink href="#">
              <img src={iconTwitter} alt="Twitter" />
            </InLineLink>
            <InLineLink href="#">
              <img src={iconInstagram} alt="Instagram" />
            </InLineLink>
          </Social>
        </RightCorner>
      </BottomFoot>
    </Footer>
  );
}
