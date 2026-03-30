import { useState, useEffect } from "react";
import { nodeAPI } from "../services/api";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState("");

    // Load events
    const load = async () => {
        const res = await nodeAPI.get("/events");
        setEvents(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    // Add event
    const add = async () => {
        if (!title) return;
        await nodeAPI.post("/events", { title });
        setTitle("");
        load();
    };

    return (
        <div className="container mt-4">
            <h2>🎉 Events</h2>

            <div className="d-flex gap-2 mb-3">
                <input
                    className="form-control"
                    placeholder="Event title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="btn btn-primary" onClick={add}>
                    Add
                </button>
            </div>

            <ul className="list-group">
                {events.map((e) => (
                    <li key={e._id} className="list-group-item">
                        {e.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}