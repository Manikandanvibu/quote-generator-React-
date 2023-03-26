import { tags } from 'fontawesome';
import React, {useState, useEffect} from 'react';
import "../Random.css";


const Bussiness = () => {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tag,setTag] = useState("business");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("https://api.quotable.io/random?tags=business")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  return (
    <>
     <div className="App">
          <h1 style={{color: "palevioletred"}} className="mb-4">{tag}</h1>
         <div className="quote">
            <h2>{quote}</h2>
            <small>-{author}-</small>
         </div>
    </div>
    </>
  )
}

export default Bussiness