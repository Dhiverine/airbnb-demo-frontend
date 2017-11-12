import React, { Component } from "react";
import styled from "styled-components";
import LaSalentina from "./LaSalentina.png";
import yourprivate from "./yourprivate.png";
import dreamy from "./dreamy.png";
import Star from "./Star.png";

const Homes = styled.section`
  display: flex;
  justify-content: space-between;
  justify-content: center;
}
`;
const FormHouses = styled.section`
  width: 33.3333%;
  display: flex;
  align-items: left;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 18px;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: left;
  }
`;
const CardTitle = styled.div`
  line-height: 18px;
  font-family: Circular-Air-Light, sans-serif;
`;
const PriceWithDescr = styled.span`
  font-family: Circular-Air-Bold, sans-serif;
  margin-top: 20px;
`;
const StarWrapper = styled.span`
align-vertical: center;
}
`;
const Review = styled.span`
  font-size: 12px;
  margin-left: 10px;
  vertical-align: center;
  }
`;
const HomeInfo = styled.div`font-family: Circular-Air-Light, sans-serif;`;
const HomeInfoEl = styled.span`
  &:before {
    content: "·";
    display: inline-block;
    up-margin: 5px;
  }
  &:first-child {
    &:before {
      display: none;
    }
  }
`;

export default function() {
  return (
    <Homes>
      <FormHouses>
        <img src={LaSalentina} alt="La Salentina" />
        <CardTitle>
          <PriceWithDescr>$82 La Salentina, see, nature & relax</PriceWithDescr>
          <HomeInfo>
            <HomeInfoEl>Entire treehouse</HomeInfoEl>
            <HomeInfoEl>1 bed</HomeInfoEl>
          </HomeInfo>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img r src={Star} alt="star" />
          </StarWrapper>
          <Review>97 reviews · Superhpst</Review>
        </CardTitle>
      </FormHouses>
      <FormHouses>
        <img src={yourprivate} alt="your private" />
        <CardTitle>
          <PriceWithDescr>
            $82 Your private 3 bedr, riad and exclusive
          </PriceWithDescr>
          <HomeInfo>
            <HomeInfoEl>Entire treehouse</HomeInfoEl>
            <HomeInfoEl>1 bed</HomeInfoEl>
          </HomeInfo>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </StarWrapper>
          <Review>161 reviews · Superhpst</Review>
        </CardTitle>
      </FormHouses>
      <FormHouses>
        <img src={dreamy} alt="dreamy" />
        <CardTitle>
          <PriceWithDescr>$200 Dreamy Tropical Tree House</PriceWithDescr>
          <HomeInfo>
            <HomeInfoEl>Entire treehouse</HomeInfoEl>
            <HomeInfoEl>1 bed</HomeInfoEl>
          </HomeInfo>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </StarWrapper>
          <Review>364 reviews · Superhpst</Review>
        </CardTitle>
      </FormHouses>
    </Homes>
  );
}
