import React, { useState, useEffect } from "react";
import "../Random.css";

const Wisdom = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("wisdom");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("http://api.quotable.io/random?tags=wisdom")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "orangered" }} className="mb-4">{tag}</h1>
      <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
    </div>
  );
};

export default Wisdom;
