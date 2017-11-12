import React, { Component } from "react";
import styled from "styled-components";
import Experiences from "./boat.png";
import Homes from "./homes.png";
import Restaurants from "./Restaurants.png";

const VariantsToExplore = styled.section`
  display: flex;
  justify-content: space-between;
  justify-content: center;
`;
const FormVariant = styled.section`
  width: 33.3333%;
  display: flex;
  align-items: center;
  margin-right: 18px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: left;
  }
`;
const P = styled.div`
  margin-left: 24px;
  @media only screen and (max-width: 400px) {
    margin-left: 12px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
export default function() {
  return (
    <VariantsToExplore>
      <FormVariant>
        <img src={Homes} alt="Homes" />
        <P>Homes</P>
      </FormVariant>
      <FormVariant>
        <img src={Experiences} alt="Experiences" />
        <P>Experiences</P>
      </FormVariant>
      <FormVariant>
        <img src={Restaurants} alt="Restaurants" />
        <P>Restaurants</P>
      </FormVariant>
    </VariantsToExplore>
  );
}
