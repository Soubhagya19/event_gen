import React, { useState } from "react";
import API from "../api/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await API.post("/login", {
                email,
                password
            });

            localStorage.setItem("user", JSON.stringify(res.data.user));

            if (res.data.user.role === "admin") {
                window.location.href = "/venue";
            } else {
                window.location.href = "/dashboard";
            }

        } catch (err) {
            alert("Invalid credentials ❌");
        }
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center vh-100"
            style={{
                background: "linear-gradient(to right, #4facfe, #00f2fe)"
            }}
        >
            <div className="card shadow-lg p-4" style={{ width: "380px", borderRadius: "15px" }}>

                {/* 🔥 APP TITLE */}
                <h2 className="text-center mb-3" style={{ fontWeight: "bold", color: "#333" }}>
                    🎉 Event Zen
                </h2>

                <h4 className="text-center mb-3">🔐 Login</h4>

                {/* EMAIL */}
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* PASSWORD */}
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="form-control mb-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* LOGIN BUTTON */}
                <button
                    className="btn btn-primary w-100"
                    onClick={handleLogin}
                    style={{ borderRadius: "10px" }}
                >
                    Login
                </button>

                {/* REGISTER LINK */}
                <p className="text-center mt-3">
                    Don't have an account?{" "}
                    <a href="/register" style={{ textDecoration: "none", fontWeight: "bold" }}>
                        Create Account
                    </a>
                </p>

            </div>
        </div>
    );
}