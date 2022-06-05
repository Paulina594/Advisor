import React from "react";

import { Header } from "./modules/header/Header";
import { PageContent } from "./modules/pageContent/PageContent";
import { Author } from "./modules/author/Author";
import { GithubRibbon } from "./modules/githubRibbon/GithubRibbon";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <GithubRibbon />
      <header>
        <Header />
      </header>
      <main>
        <PageContent />
      </main>
      <footer>
        <Author />
      </footer>
    </div>
  );
}

export default App;
