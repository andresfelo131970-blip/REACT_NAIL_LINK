import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="inicio">
      <div className="header-content">

        <div className="left-header">

          <img
            src="/img/LOGO.png"
            alt="Logo Nail Link"
            className="logo-img"
          />

          <Link to="/login" className="btn">
           Iniciar Sesión
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Header;