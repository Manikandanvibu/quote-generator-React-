import "../Random.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../reduxContainer/QuoteAction";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


const QuoteGenerator = ({ quote, author, loading, error, fetchQuote }) => {
  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const handleClick = () => {
    fetchQuote();
  };

  const handleBookmarkClick = () => {
    // localStorage.setItem('bookmarks', JSON.stringify({ quote, author }));
    const existingBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    const updatedBookmarks = [...existingBookmarks, { quote, author }];
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
<>
<DropdownButton id="dropdown-basic-button" title="Tags" className="mt-4">
      <Dropdown.Item href="/Famous">famous-quotes</Dropdown.Item>
      <Dropdown.Item href="/Wisdom">wisdom</Dropdown.Item>
      <Dropdown.Item href="/Bussiness">business</Dropdown.Item>
      <Dropdown.Item href="/Success">success</Dropdown.Item>
</DropdownButton>


<div className="App">
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStylewrapperClass
        />
      )}
      {error && <p>{error}</p>}
      {quote && author && (
        <div className="quote" style={{transform :" scale(1.0)"}}>
          <h2>{quote}</h2>
          <small>-{author}-</small>
          <Link to={"/Bookmark"} onClick={handleBookmarkClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="16"
              fill="currentColor"
              class="bi bi-bookmark"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            </svg>
          </Link>
        </div>
      )}
      <button
        type="button"
        className="btn btn-danger mb-3"
        onClick={handleClick}
      >
        Generate New Quote
      </button>
    </div>
</>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    author: state.author,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchQuote })(QuoteGenerator);
