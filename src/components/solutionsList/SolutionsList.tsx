import React, { useEffect } from "react";

import "./SolutionsList.scss";

type SolutionsListProps = {
  list: string[];
  onScenarioRemoved: (index: number) => void;
};

export const SolutionsList = ({
  list,
  onScenarioRemoved,
}: SolutionsListProps) => {
  useEffect(() => {}, [list]);

  const answers = list.map((solution: string, index: number) => (
    <li key={index} id={"" + index}>
      {solution}
      <i
        className="fa-solid fa-xmark"
        onClick={() => onScenarioRemoved(index)}
      />
    </li>
  ));

  return (
    <>
      {!list.length ? (
        <div></div>
      ) : (
        <div className="solutions">
          <p>List of possible answers:</p>
          <ol>{answers}</ol>
        </div>
      )}
    </>
  );
};
