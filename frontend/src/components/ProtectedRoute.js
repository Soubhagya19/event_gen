import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    // ❌ Not logged in
    if (!user) {
        return <Navigate to="/" />;
    }

    // ❌ Not admin but trying to access admin page
    if (adminOnly && user.role !== "admin") {
        return <Navigate to="/dashboard" />;
    }

    // ✅ Allowed
    return children;
};

export default ProtectedRoute;