import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();
    const role = localStorage.getItem("role");

    let menu = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Events", path: "/events" },
        { name: "Attendees", path: "/attendees" },
        { name: "Budget", path: "/budget" },
        { name: "Locations", path: "/locations" }
    ];

    if (role === "admin") {
        menu.push({ name: "Admin Panel", path: "/admin" });
    }

    if (role === "vendor") {
        menu.push({ name: "Vendor Panel", path: "/vendor" });
    }

    return (
        <div className="bg-dark text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>
            <h4 className="text-center mb-4">EventGen</h4>

            {menu.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`d-block p-2 mb-2 rounded text-decoration-none ${location.pathname === item.path
                            ? "bg-primary text-white"
                            : "text-light"
                        }`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}