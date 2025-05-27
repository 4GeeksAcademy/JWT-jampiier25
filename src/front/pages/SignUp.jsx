import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';

const API_URL = import.meta.env.VITE_BACKEND_URL?.replace(/\/+$/, ""); // quitar slash final

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // 🛡️ importante para CORS + cookies si se usan
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cuenta creada. Ahora inicia sesión.");
        navigate("/login");
      } else {
        alert(data.error || "Error en el registro.");
      }
    } catch (error) {
      alert("Error de conexión con el servidor.");
      console.error("Signup error:", error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Registro</h2>
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
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Signup;