import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

const API_URL = import.meta.env.VITE_BACKEND_URL?.replace(/\/+$/, "");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // 🔐 importante para CORS con token
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        sessionStorage.setItem("token", data.token);
        navigate("/private");
      } else {
        alert(data.error || "Error en el inicio de sesión.");
      }
    } catch (error) {
      alert("Error de conexión con el servidor.");
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;