import React from "react";

function NavBar() {
  return <div className="top-bar">   
            <a className="logo" href="http://localhost:3000">Cloud Garden</a>
            <nav className="NavBar">
                <a className="NavElement" href="www.wikipedia.com">Cloud Garden</a>
                <a className="NavElement" href="www.wikipedia.com">info</a>
                <a className="NavElement" href="www.wikipedia.com">more</a>
                <a className="NavElement" href="www.wikipedia.com">about</a>
            </nav> 
            <span className="search">
                <label htmlFor="search-bar">search</label>
                <input name="search" type='text' htmlFor="search-bar" placeholder="search"></input>
            </span>
        </div>

}

export default NavBar;
