import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Menu = (props) => {
  return (
    <div>
      <div>
        <ul className=" container menuList">
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                backgroundColor: "rgb(218, 218, 218)",
                width: "100%",
                height: "100%",
                textDecoration: "none",
                color: "black",
              }}
            >
              <h3>Search Results</h3>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Favourites"
              activeStyle={{
                backgroundColor: "rgb(218, 218, 218)",
                width: "100%",
                height: "100%",
                textDecoration: "none",
                color: "black",
              }}
            >
              <h3>Favourites</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Menu);
