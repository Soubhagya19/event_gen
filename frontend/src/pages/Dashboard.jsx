import React, { useEffect, useState } from "react";
import API from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({
        name: "",
        catering: "",
        hallSize: ""
    });

    const email = localStorage.getItem("email");

    const loadEvents = async () => {
        const res = await API.get(`/events/user/${email}`);
        setEvents(res.data);
    };

    useEffect(() => {
        if (email) loadEvents();
    }, [email]);

    const createEvent = async () => {
        if (!form.name) return alert("Enter event name");

        await API.post("/events", {
            name: form.name,
            catering: form.catering,
            hallSize: form.hallSize,
            userEmail: email,
            status: "pending"
        });

        alert("Event Created ✅");

        setForm({ name: "", catering: "", hallSize: "" });
        loadEvents();
    };

    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-4">
                <h2>🎉 Dashboard</h2>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>

            <div className="card p-4 mb-4 shadow">
                <h5>Create Event</h5>

                <input className="form-control mb-2"
                    placeholder="Event Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input className="form-control mb-2"
                    placeholder="Catering"
                    onChange={(e) => setForm({ ...form, catering: e.target.value })}
                />

                <input className="form-control mb-2"
                    placeholder="Hall Size"
                    onChange={(e) => setForm({ ...form, hallSize: e.target.value })}
                />

                <button className="btn btn-primary w-100" onClick={createEvent}>
                    Create Event
                </button>
            </div>

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Event</th>
                        <th>Status</th>
                        <th>Budget</th>
                    </tr>
                </thead>

                <tbody>
                    {events.length === 0 ? (
                        <tr><td colSpan="3" className="text-center">No events</td></tr>
                    ) : (
                        events.map(e => (
                            <tr key={e._id}>
                                <td>{e.name}</td>
                                <td>{e.status}</td>
                                <td>{e.totalBudget || "Not Calculated"}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;