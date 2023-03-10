import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";

import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Mancha
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<TutorialsList />} />
          <Route exact path="/tutorials" element={<TutorialsList />} />
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
