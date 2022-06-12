import React, { useEffect, useState } from "react";

import magicDust from "../../assets/images/magic-dust.png";

import "./CrystalBall.scss";

export type AnswerProps = { list: string[] };

export const CrystalBall = ({ list }: AnswerProps) => {
  const [answerIndex, setAnswerIndex] = useState<number>();
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    setAnswerIndex(undefined);
    setDrawing(false);
  }, [list]);

  const drawAnswerIndex = function () {
    if (list.length >= 2) {
      const index = Math.floor(Math.random() * list.length);
      setAnswerIndex(index);
      setDrawing(true);
    } else {
      alert("You need to add at least two answers to the pool");
    }
  };

  return (
    <>
      <div className="crystal-ball">
        <div className={drawing ? "ball drawing" : "ball"}>
          <img src={magicDust} className="magic" alt="magic dust" />
          <div className="answer">
            {answerIndex !== undefined ? (
              <div className="scale-up-center-answer">{list[answerIndex]}</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="base" />
      </div>
      <div className="wrap">
        <button className="button" onClick={() => drawAnswerIndex()}>
          Draw an answer
        </button>
      </div>
    </>
  );
};
