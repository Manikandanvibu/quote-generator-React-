import React from "react";
import icon from "./icon.png"

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Quote <img src={icon} style={{width: "32px" , height: "37px" , padding: "2px"}} alt=""></img>
          </a>
          <div class="d-flex" id="navbarColor01">
            <ul class="navbar-nav me-auto">
            <a class="nav-link active" href="/Random">Home</a>
              <li class="nav-item">
                <a class="nav-link active" href="/Bookmark">
                  Bookmark
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
