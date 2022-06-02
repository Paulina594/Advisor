import React from "react";

import "./Answer.scss";

export const Answer = ({ index, list }: any) => {
  return (
    <>
      <div className="answer">{list[index]}</div>
    </>
  );
};
