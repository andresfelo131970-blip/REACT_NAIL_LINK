import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/Login.css";

function Registro() {

    const [formulario, setFormulario] = useState({

        nombre: "",
        apellidos: "",
        tipoDocumento: "",
        identificacion: "",
        correo: "",
        telefono: "",
        direccion: "",
        usuario: "",
        contrasena: ""

    });

    const navigate = useNavigate();

    const manejarCambio = (e) => {

        setFormulario({

            ...formulario,

            [e.target.name]: e.target.value

        });

    };

    const registrar = async () => {

        try {

            const respuesta = await fetch("http://localhost:8080/api/auth/registro", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formulario)

            });

            const mensaje = await respuesta.text();

            if (mensaje === "Usuario registrado correctamente") {

                alert(mensaje);

                setFormulario({

                    nombre: "",
                    apellidos: "",
                    tipoDocumento: "",
                    identificacion: "",
                    correo: "",
                    telefono: "",
                    direccion: "",
                    usuario: "",
                    contrasena: ""

                });

                navigate("/login");

            } else {

                alert(mensaje);

            }

        } catch (error) {

            console.error(error);

            alert("Error al conectar con el servidor");

        }

    };

    return (

        <div className="login-page">

            <div className="login-card registro">

                <div className="logo-area">

                    <img
                        src="/img/logo4.png"
                        alt="Logo Nail Link"
                    />

                    <div className="brand-name">

                        Nail Link

                    </div>

                    <div className="slogan">

                        Crea tu cuenta para comenzar

                    </div>

                </div>

                <form
                    onSubmit={(e) => {

                        e.preventDefault();

                        registrar();

                    }}
                >

                    <div className="form-group">

                        <label>Nombre</label>

                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Ingrese su nombre"
                            value={formulario.nombre}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Apellidos</label>

                        <input
                            type="text"
                            name="apellidos"
                            className="form-control"
                            placeholder="Ingrese sus apellidos"
                            value={formulario.apellidos}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Tipo de documento</label>

                        <select
                            name="tipoDocumento"
                            className="form-control"
                            value={formulario.tipoDocumento}
                            onChange={manejarCambio}
                            required
                        >

                            <option value="">Seleccione</option>

                            <option value="CC">Cédula de ciudadanía</option>

                            <option value="TI">Tarjeta de identidad</option>

                            <option value="CE">Cédula de extranjería</option>

                            <option value="Pasaporte">Pasaporte</option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Número de documento</label>

                        <input
                            type="text"
                            name="identificacion"
                            className="form-control"
                            placeholder="Ingrese su documento"
                            value={formulario.identificacion}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Correo electrónico</label>

                        <input
                            type="email"
                            name="correo"
                            className="form-control"
                            placeholder="correo@ejemplo.com"
                            value={formulario.correo}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Teléfono</label>

                        <input
                            type="text"
                            name="telefono"
                            className="form-control"
                            placeholder="Ingrese su teléfono"
                            value={formulario.telefono}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Dirección</label>

                        <input
                            type="text"
                            name="direccion"
                            className="form-control"
                            placeholder="Ingrese su dirección"
                            value={formulario.direccion}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Usuario</label>

                        <input
                            type="text"
                            name="usuario"
                            className="form-control"
                            placeholder="Nombre de usuario"
                            value={formulario.usuario}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Contraseña</label>

                        <input
                            type="password"
                            name="contrasena"
                            className="form-control"
                            placeholder="••••••••"
                            value={formulario.contrasena}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className="login-buttons">

                        <button
                            type="submit"
                            className="btn-submit"
                        >
                            Registrarme
                        </button>

                        <Link
                            to="/login"
                            className="btn-submit"
                        >
                            Volver al inicio de sesión
                        </Link>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default Registro;