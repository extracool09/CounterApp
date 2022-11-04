import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Error = () => {
  return (
    <section className="ErrorPage" id="err">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/" className="linkBtn">
        Back to Counter App
      </Link>
    </section>
  );
};
export default Error;
