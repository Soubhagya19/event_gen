export default function Navbar() {
    const role = localStorage.getItem("role") || "user";

    return (
        <div className="d-flex justify-content-between bg-white p-3 shadow">
            <h5>Dashboard ({role})</h5>

            <button
                className="btn btn-danger"
                onClick={() => {
                    localStorage.clear();
                    window.location = "/";
                }}
            >
                Logout
            </button>
        </div>
    );
}