import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      onLogin(username);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-16 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        className="w-full border px-3 py-2 mb-3"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full border px-3 py-2 mb-4"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
