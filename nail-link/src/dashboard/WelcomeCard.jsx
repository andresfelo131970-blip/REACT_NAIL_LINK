import "../styles/WelcomeCard.css";
import DashboardServices from "./DashboardServices";

function WelcomeCard() {

    const usuario = localStorage.getItem("usuario");

    return (

        <section className="welcome-card">

            <div className="welcome-info">

                <h1>
                    ¡Bienvenido, {usuario}!
                </h1>

                <p className="subtitle">
                    Nos alegra tenerte nuevamente en <strong>NAIL LINK</strong>.
                </p>

                <p className="message">

                    🚧 Estamos construyendo nuevas funcionalidades para ofrecerte una mejor experiencia.

                </p>

                <div className="construction-box">

                    <h3>Muy pronto podrás administrar:</h3>

                    <DashboardServices />


                </div>

            </div>


        </section>

    );

}

export default WelcomeCard;