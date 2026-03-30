import React, { useEffect, useState } from "react";
import API from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminPanel() {
    const [events, setEvents] = useState([]);

    const loadEvents = async () => {
        const res = await API.get("/events");
        setEvents(res.data);
    };

    useEffect(() => { loadEvents(); }, []);

    const approve = async (id) => {
        await API.put(`/events/${id}`, {
            venueCost: 1000,
            cateringCost: 200,
            hallCost: 500
        });
        alert("Approved ✅");
        loadEvents();
    };

    const deleteEvent = async (id) => {
        await API.delete(`/events/${id}`);
        loadEvents();
    };

    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    return (
        <div className="container mt-5">

            <div className="d-flex justify-content-between mb-4">
                <h2>👨‍💼 Admin Panel</h2>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
            <div className="d-flex justify-content-between mb-4">
                <h2>👨‍💼 Admin Panel</h2>

                <div>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => window.location.href = "/venue"}
                    >
                        Manage Venues
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            localStorage.clear();
                            window.location.href = "/login";
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>User</th>
                        <th>Event</th>
                        <th>Status</th>
                        <th>Budget</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {events.map(e => (
                        <tr key={e._id}>
                            <td>{e.userEmail}</td>
                            <td>{e.name}</td>
                            <td>{e.status}</td>
                            <td>{e.totalBudget || "Not Calculated"}</td>

                            <td>
                                <button className="btn btn-success me-2"
                                    onClick={() => approve(e._id)}>
                                    Approve
                                </button>

                                <button className="btn btn-danger"
                                    onClick={() => deleteEvent(e._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default AdminPanel;