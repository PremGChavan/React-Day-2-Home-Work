import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Topics covered</h1>
      <p className="description">
        The following is a list of all the topics we cover in the MDN learning area.
      </p>

      <div className="topic">
        <a href="#" className="link">
          Getting started with the web
        </a>
        <p className="subtext">
          Provides a practical introduction to web development for complete beginners.
        </p>
      </div>

      <div className="topic">
        <a href="#" className="link">
          HTML — Structuring the web
        </a>
        <p className="subtext">
          HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.
        </p>
      </div>

      <div className="topic">
        <a href="#" className="link">
          CSS — Styling the web
        </a>
        <p className="subtext">
          CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.
        </p>
      </div>
    </div>
  );
};

export default App;
