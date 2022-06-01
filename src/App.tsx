import React from "react";

import { Header } from "./modules/header/Header";
import { PageContent } from "./modules/pageContent/PageContent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <PageContent />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
