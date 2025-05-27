import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 mb-3">Bienvenido a Jean Pierre's Space</h1>
      <p className="lead mb-4">
      registrate o inicia sesión para acceder a contenido exclusivo.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-primary btn-lg">
         LOGIN
        </Link>
        <Link to="/signup" className="btn btn-outline-primary btn-lg">
          REGISTER
        </Link>
      </div>

      <footer className="mt-5 text-muted">
        <small>© {new Date().getFullYear()} - Todos los derechos reservados</small>
      </footer>
    </div>
  );
};