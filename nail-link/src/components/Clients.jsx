function Clients() {
  return (
    <section id="sedes" className="footer-section">
      <div className="footer-container">

        <div className="clientes-img">
          <img
            src="/img/sede.jpg"
            alt="Clientes Nail Link"
          />
        </div>

        <div className="footer-text">

          <h2>Nuestros Clientes</h2>

          <hr />

          <p>
            <strong>Medellín:</strong> Spas afiliados usando Nail Link
          </p>

          <div className="logo-row">
            <img src="/img/spa/spa1.png" alt="Spa 1" />
            <img src="/img/spa/spa2.png" alt="Spa 2" />
            <img src="/img/spa/spa3.png" alt="Spa 3" />
            <img src="/img/spa/spa4.png" alt="Spa 4" />
          </div>

          <hr />

          <p>
            <strong>Bogotá:</strong> Negocios conectados a la plataforma
          </p>

          <div className="logo-row">
            <img src="/img/spa/spa5.png" alt="Spa 5" />
            <img src="/img/spa/spa6.png" alt="Spa 6" />
            <img src="/img/spa/spa7.png" alt="Spa 7" />
          </div>

          <hr />

          <p>
            <strong>Cali:</strong> Crecimiento con nuevas alianzas
          </p>

          <div className="logo-row">
            <img src="/img/spa/spa8.png" alt="Spa 8" />
            <img src="/img/spa/spa9.png" alt="Spa 9" />
          </div>

          <hr />

        </div>

        <div className="footer-map">

          <br />

          <h2>Nuestra sede</h2>

          <iframe
            src="https://maps.google.com/maps?q=Bogota&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Mapa de la sede Nail Link"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
}

export default Clients;