import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import logo from "./logo.svg";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
