import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";


function Login() {

  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    usuario: "",
    contrasena: ""
  });

  // Actualizar los datos del formulario
  const manejarCambio = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  // Iniciar sesión
  const manejarIngreso = async (e) => {

    e.preventDefault();

    try {

      const respuesta = await fetch("http://localhost:8080/api/auth/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(datos)

      });

      const mensaje = await respuesta.text();

      if (mensaje === "Login correcto") {

        // Guardar el usuario en el navegador
        localStorage.setItem("usuario", datos.usuario);

        // Ir al Dashboard
        navigate("/dashboard");

      } else {

        alert(mensaje);

      }

    } catch (error) {

      console.error(error);
      alert("No fue posible conectar con el servidor.");

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <div className="logo-area">

          <img
            src="/img/logo4.png"
            alt="Logo Nail Link"
          />

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
              name="usuario"
              className="form-control"
              placeholder="Ej: AndresRiaño"
              value={datos.usuario}
              onChange={manejarCambio}
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="password">
              Contraseña
            </label>

            <input
              type="password"
              id="password"
              name="contrasena"
              className="form-control"
              placeholder="••••••••"
              value={datos.contrasena}
              onChange={manejarCambio}
              required
            />

          </div>

          <div className="login-buttons">

             <button
               type="submit"
               className="btn-submit"
              >
               Ingresar
             </button>

            <Link
               to="/registro"
               className="btn-submit"
               >
                Registrarse
           </Link>

          </div>

        </form>

        <a
          href="#"
          className="forgot-password"
        >
          ¿Olvidaste tu contraseña?
        </a>

        <Link
          to="/"
          className="btn-volver"
        >
          ← Volver al inicio
        </Link>

      </div>



    </div>

  );

}

export default Login;