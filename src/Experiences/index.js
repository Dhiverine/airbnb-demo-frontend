import React, { Component } from "react";
import styled from "styled-components";
import SalsaNight from "./SalsaNight.png";
import TableMountain from "./TableMountain.png";
import WhaleWatching from "./WhaleWatching.png";
import ForestTherapy from "./ForestTherapy.png";
import Star from "./Star.png";

const Experiences = styled.section`
  height: 395px;
  display: flex;
  justify-content: wrap;
  align-items: left;
  
}
`;
const FormExperience = styled.section`
  width: 24.9999%;
  display: flex;
  margin-right: 18px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: left;

  @media only screen and (max-width: 400px) {
    align-items: left;
  }
`;
const CardTitle = styled.div`
  flex-direction: column;
  display: flex;
  line-height: 18px;
  font-family: Circular-Air-Light, sans-serif;
  margin-top: 10px;
  line-height: 18px;
`;

const PriceAndDescr = styled.span`
  font-size: 15px;
  width: 229px;
  flex-direction: row;
`;

const Price = styled.span`
  font-family: Circular-Air-Bold, sans-serif;
  margin-right: 5px;
  text-align:left;
  }
`;
const StarWrapper = styled.span`
align: left;
margin-top: 7px;
}
`;
const Review = styled.span`
  font-size: 12px;
  vertical-align: center;
  margin-left: 8px;
  line-height: normal;

color: #383838;
  
  }
`;

export default function() {
  return (
    <Experiences>
      <FormExperience>
        <img src={ForestTherapy} alt="Forest therapy" />
        <CardTitle>
          <PriceAndDescr>
            <Price>$29</Price>
            <span>Forest therapy</span>
          </PriceAndDescr>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <Review>44 reviews</Review>
          </StarWrapper>
        </CardTitle>
      </FormExperience>
      <FormExperience>
        <img src={WhaleWatching} alt="Whale wathcing" />
        <CardTitle>
          <PriceAndDescr>
            <Price>$69</Price>
            <span>Whale watching</span>
          </PriceAndDescr>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <Review>46 reviews</Review>
          </StarWrapper>
        </CardTitle>
      </FormExperience>
      <FormExperience>
        <img src={TableMountain} alt="TableMountain" />
        <CardTitle>
          <PriceAndDescr>
            <Price>$69</Price>
            <span>Table Mountain Summit, Cable Car Down</span>
          </PriceAndDescr>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <Review>44 reviews</Review>
          </StarWrapper>
        </CardTitle>
      </FormExperience>
      <FormExperience>
        <img src={SalsaNight} alt="SalsaNight" />
        <CardTitle>
          <PriceAndDescr>
            <Price>$50</Price>
            <span>SalsaNight</span>
          </PriceAndDescr>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <Review>44 reviews</Review>
          </StarWrapper>
        </CardTitle>
      </FormExperience>
    </Experiences>
  );
}
