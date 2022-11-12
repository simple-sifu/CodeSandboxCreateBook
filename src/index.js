import React, { useState } from "react";
import ReactDOM from "react-dom";
import BooksPresenter from "./Books/BooksPresenter";

import "./styles.css";

function App() {
  const [vm, copyVmToComponentState] = useState([]);

  React.useEffect(() => {
    async function load() {
      const booksPresenter = new BooksPresenter();
      const generatedVm = await booksPresenter.load();
      copyVmToComponentState(generatedVm);
    }
    load();
  }, []);

  return (
    <div>
      {vm.map((book, i) => {
        return <div key={i}>{book.visibleName}</div>;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
