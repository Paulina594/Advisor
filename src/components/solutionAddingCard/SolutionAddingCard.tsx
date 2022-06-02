import React, { useState } from "react";

import "./SolutionAddingCard.scss";

export const SolutionAddingCard = (props: any) => {
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
