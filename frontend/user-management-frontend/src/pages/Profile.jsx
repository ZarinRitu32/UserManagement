import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
    const [user, setUser] = useState({ id: "", name: "", email: "", password: "" });

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                `https://localhost:5001/api/user/update/${user.id}`,
                user
            );
            alert("Profile updated successfully");
            localStorage.setItem("user", JSON.stringify(res.data));
        } catch (err) {
            console.error(err);
            alert("Error updating profile");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "50px" }}>
            <h2>Profile</h2>
            <form onSubmit={handleUpdate}>
                <input
                    style={{ display: "block", margin: "10px 0", width: "100%", padding: "8px" }}
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    required
                />
                <input
                    style={{ display: "block", margin: "10px 0", width: "100%", padding: "8px" }}
                    placeholder="Email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    required
                />
                <input
                    style={{ display: "block", margin: "10px 0", width: "100%", padding: "8px" }}
                    placeholder="Password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <button style={{ padding: "8px 16px" }} type="submit">Update Profile</button>
            </form>
        </div>
    );
}