import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://localhost:5001/api/user/login", { email, password });
            alert("Login successful! Welcome " + res.data.name);
            localStorage.setItem("user", JSON.stringify(res.data)); // store user info
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error(err);
            alert("Invalid email or password");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "50px" }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button style={{ padding: "8px 16px" }} type="submit">Login</button>
            </form>
        </div>
    );
}