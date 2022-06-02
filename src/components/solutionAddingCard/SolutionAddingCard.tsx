import React, { useState } from "react";

import "./SolutionAddingCard.scss";

type SolutionAddingCardProps = {
  input: string;
  handleClick: () => void;
  handleChange: (e: any) => void;
};

export const SolutionAddingCard = (props: SolutionAddingCardProps) => {
  const { input, handleClick, handleChange } = props;

  return (
    <div className="input-wrapper">
      <label htmlFor="scenario">Add possible solution:</label>
      <input
        maxLength={115}
        value={input}
        id="scenario"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
