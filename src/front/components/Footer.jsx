export const Footer = () => (
  <footer className="footer bg-light py-4 text-center mt-auto">
    <div className="container">
      <p className="mb-1">
        © {new Date().getFullYear()} Jean Pierre . Todos los derechos reservados.
      </p>
      <p className="small text-muted">
        Desarrollado con ❤️ por{" "}
        <a href="https://github.com/Jampiier25" target="_blank" rel="noreferrer">
          Jampiier25
        </a>
      </p>
    </div>
  </footer>
);