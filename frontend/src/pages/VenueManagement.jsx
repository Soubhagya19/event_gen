import React, { useEffect, useState } from "react";
import API from "../api/dotnetApi";
import "bootstrap/dist/css/bootstrap.min.css";

function VenueManagement() {
    const [venues, setVenues] = useState([]);
    const [form, setForm] = useState({
        name: "",
        location: "",
        capacity: "",
        price: ""
    });

    const loadVenues = async () => {
        try {
            const res = await API.get("/venue");
            setVenues(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadVenues();
    }, []);

    const addVenue = async () => {
        try {
            await API.post("/venue", form);
            setForm({ name: "", location: "", capacity: "", price: "" });
            loadVenues();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteVenue = async (id) => {
        try {
            await API.delete(`/venue/${id}`);
            loadVenues();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mt-5">

            <h2 className="text-center mb-4">🏟️ Venue Management</h2>

            {/* FORM */}
            <div className="card p-4 shadow mb-4">
                <h5>Add Venue</h5>

                <input className="form-control mb-2"
                    placeholder="Venue Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input className="form-control mb-2"
                    placeholder="Location"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                />

                <input className="form-control mb-2"
                    type="number"
                    placeholder="Capacity"
                    value={form.capacity}
                    onChange={(e) => setForm({ ...form, capacity: e.target.value })}
                />

                <input className="form-control mb-3"
                    type="number"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                />

                <button className="btn btn-primary w-100" onClick={addVenue}>
                    Add Venue
                </button>
            </div>

            {/* TABLE */}
            <div className="card shadow p-3">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Capacity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {venues.map((v) => (
                            <tr key={v.id}>
                                <td>{v.name}</td>
                                <td>{v.location}</td>
                                <td>{v.capacity}</td>
                                <td>₹{v.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteVenue(v.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
}

export default VenueManagement;