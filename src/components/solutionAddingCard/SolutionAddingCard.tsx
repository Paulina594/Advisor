import React from "react";

import "./SolutionAddingCard.scss";

export const SolutionAddingCard = () => {
  return (
    <div className="input-wrapper">
      <label htmlFor="scenario">Add possible solution:</label>
      <input maxLength={115} id="scenario" />
      <button type="submit">Add</button>
    </div>
  );
};
