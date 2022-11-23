import data from "./data";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
    console.log(amount);
  };
  return (
    <div className="container text-center bg-light my-5">
      <h2>Bored with same dummy text all the time?</h2>
      <h3>Create your paqragraphs here:</h3>
      <form onSubmit={submitHandler} className="container my-5">
        <label htmlFor="amount">Paragraphs</label>
        <input
          className="ms-2"
          type="number"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn btn-secondary  ms-2">
          Generate
        </button>
      </form>
      <article className="text-start">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
      <footer className="text-center footer">
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-decoration-none text-black mb-0"
        >
          Developed with ❤ by raziwebdeveloper.com
        </a>
      </footer>
    </div>
  );
}

export default App;
