import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SalonHome from "./pages/SalonHome";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import User from "./Components/User";
import Createuser from "./Components/Createuser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalonHome />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/create-user" element={<Createuser />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
