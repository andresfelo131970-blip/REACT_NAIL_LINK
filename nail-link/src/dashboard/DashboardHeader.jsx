import "../styles/DashboardHeader.css";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {

    const usuario = localStorage.getItem("usuario");

    const fecha = new Date().toLocaleDateString("es-CO", {

        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

        const navigate = useNavigate();
        const cerrarSesion = () => {

        localStorage.removeItem("usuario");
        localStorage.removeItem("token"); // si lo usas

        navigate("/login");

    };

    return (

        <header className="dashboard-header">

            <div className="header-left">

                <h2>
                    ¡Bienvenido, {usuario}!
                </h2>

                <p>{fecha}</p>

            </div>



            <div className="header-right">

                <button className="notification-btn">
                    🔔
                </button>

                <div className="user-avatar">

                    {usuario?.charAt(0).toUpperCase()}

                </div>

                <div className="logout-container">

                 <button
                    className="logout-header"
                    onClick={cerrarSesion}
                >
                    Cerrar sesión
                 </button>
                </div>

            </div>

        </header>

    );

}

export default DashboardHeader;