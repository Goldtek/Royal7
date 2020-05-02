import React from "react";
import "./errorpage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="main">
    <div className="fof">
          <h1>Error 404</h1>
          <br/>
          <Link to="/">Home</Link>
    </div>
</div>
  );
};

export default ErrorPage;
