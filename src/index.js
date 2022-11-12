import React, { useState } from "react";
import ReactDOM from "react-dom";
import BooksPresenter from "./Books/BooksPresenter";
import "./styles.css";

function App() {
  const [vm, copyVmToComponentState] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [clickMessage, setClickMessage] = useState("");

  React.useEffect(() => {
    async function load() {
      const booksPresenter = new BooksPresenter();
      const generatedVm = await booksPresenter.load();
      copyVmToComponentState(generatedVm);
    }
    load();
    setLoadingMessage("loading");
  }, []);

  const handleClick = () => {
    setClickMessage("button clicked");
    setLoadingMessage("");
    async function addBook() {
      setClickMessage("addBook");
      const booksPresenter = new BooksPresenter();
      await booksPresenter.createBook();
    }
    addBook();
  };

  return (
    <div>
      <div>{loadingMessage}</div>
      <div>{clickMessage}</div>
      {vm.map((book, i) => {
        return <div key={i}>{book.visibleName}</div>;
      })}
      <button class="favorite styled" onClick={() => handleClick()}>
        Add Book
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
