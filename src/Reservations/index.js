import React, { Component } from "react";
import styled from "styled-components";
import Chumleys from "./Chumleys.png";
import PrimeMeats from "./PrimeMeats.png";
import Seaprice from "./Seaprice.png";
import Hanjan from "./Hanjan.png";

const Reservations = styled.section`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  }
`;
const ReservVar = styled.section`
  width: 24.9999%;
  display: flex;
  align-items: center;
  margin-right: 18px;
  display: flex;
  align-items: left;
  flex-direction: column;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: left;
  }
`;

const CardTitle = styled.div``;
const Capitals = styled.div`
}
`;

const District = styled.span`font-family: Circular-Air-Bold;`;
const Price = styled.span`
  display: inline-block;

  margin-right: 5px;
`;

export default function() {
  return (
    <Reservations>
      <ReservVar>
        <img src={Chumleys} alt="Chumleys" />
        <CardTitle>
          <Capitals>Speakeasy</Capitals>
          <District>Chumley's</District>
          <Price>About $60 per person</Price>
        </CardTitle>
      </ReservVar>
      <ReservVar>
        <img src={Hanjan} alt="Hanjan" />
        <CardTitle>
          <Capitals>Korean Gastropub</Capitals>
          <District>Hanjan</District>
          <Price>About $50 per person</Price>
        </CardTitle>
      </ReservVar>
      <ReservVar>
        <img src={PrimeMeats} alt="PrimeMeats" />
        <CardTitle>
          <Capitals>German American</Capitals>
          <District>Prime Meats</District>
          <Price>About $55 per person</Price>
        </CardTitle>
      </ReservVar>
      <ReservVar>
        <img src={Seaprice} alt="Seaprice" />
        <CardTitle>
          <Capitals>Fine Food</Capitals>
          <District>Seaprice</District>
          <Price>About $70 per person</Price>
        </CardTitle>
      </ReservVar>
    </Reservations>
  );
}
