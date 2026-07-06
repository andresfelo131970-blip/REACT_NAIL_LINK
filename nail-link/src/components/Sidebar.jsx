import { Link, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

    const navigate = useNavigate();

    const cerrarSesion = () => {

        localStorage.removeItem("usuario");
        navigate("/login");

    };

    return (

        <aside className="sidebar">

            <div className="logo">

                <img
                    src="/img/logo4.png"
                    alt="Logo Nail Link"
                    className="logo-img"
                />

                <h2>NAIL LINK</h2>

                <p>Sistema de Gestión<br />Spa de Uñas</p>

            </div>

            <nav className="menu">

                <ul>

                    <li>
                     <Link to="/dashboard">
                       <img src="/img/cita.png" alt="" />
                       <span>Inicio</span>
                     </Link>
                   </li>

                   <li>
                     <Link to="/dashboard">
                       <img src="/img/agenda.png" alt="" />
                       <span>Agenda</span>
                     </Link>
                   </li>

                   <li>
                     <Link to="#">
                       <img src="/img/cliente.png" alt="" />
                       <span>Clientes</span>
                     </Link>
                   </li>


                   <li>
                     <Link to="#">
                      <img src="/img/factura.png" alt="" />
                      <span>Pagos</span>
                     </Link>
                   </li>

                   <li>
                     <Link to="#">
                      <img src="/img/inventario.png" alt="" />
                      <span>Inventario</span>
                     </Link>
                   </li>

                   <li>
                     <Link to="#">
                      <img src="/img/recordatorio.png" alt="" />
                      <span>Indicadores</span>
                     </Link>
                   </li>

                   <li>
                     <Link to="#">
                      <img src="/img/reporte.png" alt="" />
                      <span>Reportes</span>
                     </Link>
                   </li>

                   <li>
                     <Link to="#">
                      <img src="/img/administracion.png" alt="" />
                      <span>Configuración</span>
                     </Link>
                   </li>

                </ul>

            </nav>

            <div className="logout-container">

                <button
                    className="logout"
                    onClick={cerrarSesion}
                >
                    Cerrar sesión
                </button>

            </div>

        </aside>

    );

}

export default Sidebar;