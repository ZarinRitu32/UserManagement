import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
    return (
        <Router>
            <nav style={{ padding: "10px", background: "#eee" }}>
                <Link style={{ marginRight: "10px" }} to="/register">Register</Link>
                <Link style={{ marginRight: "10px" }} to="/login">Login</Link>
                <Link style={{ marginRight: "10px" }} to="/profile">Profile</Link>
            </nav>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;