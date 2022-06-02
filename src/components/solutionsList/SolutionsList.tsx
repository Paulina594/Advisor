import React, { useEffect, useState } from "react";

import "./SolutionsList.scss";

type SolutionsListProps = { list: string[] };

export const SolutionsList = ({ list }: SolutionsListProps) => {
  useEffect(() => {
    console.log("change");
  }, [list]);

  const answers = list.map((solution: string) => (
    <li key={list.indexOf(solution)}>{solution}</li>
  ));

  return (
    <>
      {!list.length ? (
        <div>cos tu pusto</div>
      ) : (
        <div className="solutions">
          <p>List of possible answers:</p>
          <ol>{answers}</ol>
        </div>
      )}
    </>
  );
};
