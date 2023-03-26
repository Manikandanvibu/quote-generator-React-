import React from "react";
import { useState, useEffect } from "react";
import "../Random.css";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const handleDelete = (index) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks.splice(index, 1);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  }

  return (
    <>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet!</p>
      ) : (
        bookmarks.map((bookmark, index) => (
          <div className="App">
            <div className="quote">
              <h2>
                {index + 1}. {bookmark.quote}
              </h2>
              <small>-{bookmark.author}</small>

              <div class="d-grid gap-2">
                <button class="btn btn-lg btn-primary" type="button" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Bookmark;
