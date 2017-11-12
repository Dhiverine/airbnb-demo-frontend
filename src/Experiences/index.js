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
  /*box-sizing: border-box;*/
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
  line-height: 18px;
  font-family: Circular-Air-Light, sans-serif;

  margin: 0px 0px 0px 0px;*/
`;
const Price = styled.span`
  font-family: Circular-Air-Bold, sans-serif;
  margin-right: 5px;
  text-align:left;
  }
`;
const StarWrapper = styled.span`
align: left;
}
`;
const Review = styled.span`
  font-size: 12px;
  margin-left: 8px;
  vertical-align: center;
  }
`;

export default function() {
  return (
    <Experiences>
      <FormExperience>
        <img src={ForestTherapy} alt="ForestTherapy" />
        <CardTitle>
          <Price>$29</Price>
          <span>Forest therapy</span>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </StarWrapper>
          <Review>44 reviews</Review>
        </CardTitle>
      </FormExperience>
      <FormExperience>
        <img src={WhaleWatching} alt="WhaleWathcing" />
        <CardTitle>
          <Price>$69</Price>
          <span>WhaleWatching</span>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </StarWrapper>
          <Review>46 reviews</Review>
        </CardTitle>
      </FormExperience>
      <FormExperience>
        <img src={TableMountain} alt="TableMountain" />
        <CardTitle>
          <Price>$69</Price>
          <span>TableMountain</span>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </StarWrapper>
          <Review>44 reviews</Review>
        </CardTitle>
      </FormExperience>
      <FormExperience>
        <img src={SalsaNight} alt="SalsaNight" />
        <CardTitle>
          <Price>$50</Price>
          <span>SalsaNight</span>
          <StarWrapper>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </StarWrapper>
          <Review>44 reviews</Review>
        </CardTitle>
      </FormExperience>
    </Experiences>
  );
}
