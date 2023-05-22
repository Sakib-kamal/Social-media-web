import Profile from "./pages/profile/Profile"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import Login from "./pages/login/Login";

export default function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={user ? < Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ?< Navigate to="/" />: <Register />} />
      </Routes>
    </Router>
  );
}
