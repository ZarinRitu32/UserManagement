import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://localhost:5001/api/user/register", {
                name,
                email,
                password,
            });
            alert("Registered successfully: " + res.data.name);
            setName("");
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error(err);
            alert("Error registering user");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "50px" }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    style={{ display: "block", margin: "10px 0", width: "100%", padding: "8px" }}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    style={{ display: "block", margin: "10px 0", width: "100%", padding: "8px" }}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    style={{ display: "block", margin: "10px 0", width: "100%", padding: "8px" }}
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button style={{ padding: "8px 16px" }} type="submit">Register</button>
            </form>
        </div>
    );
}