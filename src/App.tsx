import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/movie" element={<Movies />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
