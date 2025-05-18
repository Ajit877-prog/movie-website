import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const HomePage = () => (
    <div>
      <Header user={user} setUser={setUser} />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
