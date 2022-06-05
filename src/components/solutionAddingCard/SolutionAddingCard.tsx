import React, { useState } from "react";

import "./SolutionAddingCard.scss";

type SolutionAddingCardProps = {
  onCardAdded: (scenarioText: string) => void;
};

export const SolutionAddingCard = (props: SolutionAddingCardProps) => {
  const { onCardAdded } = props;

  const [scenarioTxt, setScenarioTxt] = useState("");

  const handleChange = (e: any) => {
    setScenarioTxt(e.target.value);
  };

  const enterKeyCheck = (e: any) => {
    if (e.key === "Enter") {
      handleAddingScenario();
    }
  };

  const handleAddingScenario = () => {
    if (scenarioTxt !== "") {
      onCardAdded(scenarioTxt);
      clearScenarioText();
    } else {
      alert("You need to add an answer");
    }
  };

  const clearScenarioText = () => {
    setScenarioTxt("");
  };

  return (
    <div className="input-wrapper">
      <label htmlFor="scenario">Add possible solution:</label>
      <input
        maxLength={115}
        value={scenarioTxt}
        id="scenario"
        onKeyUp={enterKeyCheck}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleAddingScenario}>
        Add
      </button>
    </div>
  );
};
