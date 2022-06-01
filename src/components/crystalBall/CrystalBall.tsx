import React from "react";

import { Answer } from "../answer/Answer";

import magicDust from "../../assets/images/magic-dust.png";

import "./CrystalBall.scss";

export const CrystalBall = () => {
  return (
    <div className="crystal-ball">
      <div className="ball">
        <img src={magicDust} className="magic" alt="magic dust" />
        <Answer />
      </div>
      <div className="base" />
    </div>
  );
};
