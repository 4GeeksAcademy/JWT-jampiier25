import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './private.css';

const API_URL = import.meta.env.VITE_BACKEND_URL?.replace(/\/+$/, "");

function Private() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${API_URL}/api/private`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include" // 👈 importante para que CORS permita cookies o headers personalizados
    })
      .then(res => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error("Error en solicitud privada:", err);
        sessionStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="containerprivate">
      <h2>Zona Privada</h2>
      <p>{message}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

export default Private;