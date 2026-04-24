import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import User from "./User";
import Createuser from "./Createuser";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleUserCreated = () => {
    const updatedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(updatedUsers);
    setActiveSection("users");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "users":
        return <User />;
      case "create-user":
        return <Createuser onUserCreated={handleUserCreated} />;
      default:
        return (
          <>
            <div className="dashboard-cards">
              <div className="dashboard-card">
                <h3>Total Users</h3>
                <p className="card-number">{users.length}</p>
              </div>
              <div className="dashboard-card">
                <h3>Active Users</h3>
                <p className="card-number">{users.length}</p>
              </div>
              <div className="dashboard-card">
                <h3>New Users</h3>
                <p className="card-number">{users.length > 0 ? 1 : 0}</p>
              </div>
            </div>

            <div className="quick-actions">
              <h2>Quick Actions</h2>
              <div className="action-buttons">
                <button
                  onClick={() => setActiveSection("create-user")}
                  className="action-button"
                >
                  Create User
                </button>
                <button
                  onClick={() => setActiveSection("users")}
                  className="action-button"
                >
                  View All Users
                </button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <main className="dashboard-main">
      <header className="dashboard-header">
        <h1>
          {activeSection === "overview"
            ? "Dashboard Overview"
            : activeSection === "users"
              ? "All Users"
              : activeSection === "create-user"
                ? "Create New User"
                : "Dashboard"}
        </h1>
        <div className="header-actions">
          <button
            onClick={() => setActiveSection("overview")}
            className={`tab-button ${
              activeSection === "overview" ? "active" : ""
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveSection("users")}
            className={`tab-button ${
              activeSection === "users" ? "active" : ""
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveSection("create-user")}
            className={`tab-button ${
              activeSection === "create-user" ? "active" : ""
            }`}
          >
            Create User
          </button>
        </div>
      </header>
      <div className="dashboard-content">{renderSection()}</div>
    </main>
  );
};

export default Dashboard;
