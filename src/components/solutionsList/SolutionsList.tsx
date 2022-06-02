import React from "react";

import "./SolutionsList.scss";

type SolutionsListProps = { list: string[] };

export const SolutionsList = (props: SolutionsListProps) => {
  const answer = props.list.map((solution: string) => (
    <li key={props.list.indexOf(solution)}>{solution}</li>
  ));

  return (
    <div className="solutions">
      <p>List of possible answers:</p>
      <ol>{answer}</ol>
    </div>
  );
};
