import React from "react";
import iTunes from "../media/itunesLogo.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container footerContainer">
        <p className="footerText">
          {" "}
          Copyright &#169; 2020 Developed By Omphile Ramadie. All rights
          reserved.
        </p>

        <p className="footerText">
          By using our site, you acknowledge that you have read and understand
          our Terms of Service.
        </p>
        <div className="itunesContainer">
          <img src={iTunes} alt="Itunes Logo" className="itunesLogo" />
          <p className="footerText">
            This site uses data from the Itunes Search Api
          </p>
        </div>
        <p className="footerText"> South Africa</p>
      </div>
    </div>
  );
}
