import { useState } from "react";
import "../Login.css";
import { Link } from "react-router-dom";

function Login() {

  const [mostrarModal, setMostrarModal] = useState(false);

  const manejarIngreso = (e) => {
    e.preventDefault();
    setMostrarModal(true);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo-area">
          <img src="/img/logo4.png" alt="Nail Link Logo" />

          <div className="brand-name">
            Nail Link
          </div>

          <div className="slogan">
            Tu SPA de uñas a un enlace de distancia
          </div>
        </div>

        <form onSubmit={manejarIngreso}>

          <div className="form-group">
            <label htmlFor="usuario">
              Nombre de usuario
            </label>

            <input
              type="text"
              id="usuario"
              className="form-control"
              placeholder="Ej: AndresRiaño"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Contraseña
            </label>

            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="btn-submit"
          >
            Ingresar
          </button>

        </form>

        <a href="#" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>

        <Link
          to="/"
          className="btn-volver"
        >
          ← Volver al inicio
        </Link>

      </div>

      {/* Modal - Anuncio de desarrollo*/}

      {mostrarModal && (

        <div
          className="modal-overlay"
          onClick={() => setMostrarModal(false)}
        >

          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >

           <div className="modal-header">

           <img
            src="/img/nail_link.jpg"
            alt="Logo Nail Link"
            className="modal-logo"
            />

            </div>

            <h2>🚧 Inicio de sesión en desarrollo</h2>

            <p>
              Gracias por tu interés en <strong>Nail Link</strong>.
            </p>

            <p>
              El módulo de autenticación aún se encuentra en desarrollo y
              estará disponible próximamente.
            </p>

            <p>
              Muy pronto podrás iniciar sesión para gestionar citas,
              clientes, inventario y todas las funcionalidades de la
              plataforma.
            </p>

            <button
              className="btn-modal"
              onClick={() => setMostrarModal(false)}
            >
              Entendido
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Login;