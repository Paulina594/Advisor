import React from "react";

import { CrystalBall } from "../../components/crystalBall/CrystalBall";
import { SolutionAddingCard } from "../../components/solutionAddingCard/SolutionAddingCard";
import { SolutionsList } from "../../components/solutionsList/SolutionsList";

import "./PageContent.scss";

export const PageContent = () => {
  const description = (
    <div className="description">
      <p>
        Sometimes it's hard to decide what is the best us or what should we do
        in certain situation.
      </p>
      <br />
      <p>Let the blind fate help you with this problem.</p>
      <br />
      <p>Simply just add possible scenarios to the pool and draw an answer.</p>
    </div>
  );

  return (
    <>
      <div className="column">
        <div className="row">{description}</div>
        <div className="row">
          <SolutionAddingCard />
        </div>
        <div className="row">
          <SolutionsList />
        </div>
      </div>
      <div className="column answer-wrapper">
        <CrystalBall />
      </div>
    </>
  );
};