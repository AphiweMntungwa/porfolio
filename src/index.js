import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App";

import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Project from "./Components/Projects/Project";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
// import reportWebVitals from "./reportWebVitals";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <Navbar />
            {Profile()}
          </App>
        }
      />
      <Route
        path="/about"
        element={
          <App>
            <Navbar />
            {About()}
          </App>
        }
      />
      <Route
        path="/projects"
        element={
          <App>
            <Navbar />
            {Project()}
          </App>
        }
      />
      <Route
        path="/blog"
        element={
          <App>
            <Navbar />
            {Blog()}
          </App>
        }
      />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
