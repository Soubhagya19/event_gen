import React, { useState } from "react";
import API from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
    const [form, setForm] = useState({ email: "", password: "" });

    const register = async () => {
        try {
            await API.post("/auth/register", {
                ...form,
                role: "user"
            });

            alert("Registered Successfully ✅");
            window.location.href = "/login";
        } catch {
            alert("Registration failed ❌");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                background: "linear-gradient(135deg, #43cea2, #185a9d)"
            }}
        >
            <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "15px" }}>
                <h3 className="text-center mb-4">📝 Register</h3>

                <input
                    className="form-control mb-3"
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button className="btn btn-success w-100 mb-2" onClick={register}>
                    Register
                </button>

                <div className="text-center">
                    <a href="/login">Already have account?</a>
                </div>
            </div>
        </div>
    );
}

export default Register;