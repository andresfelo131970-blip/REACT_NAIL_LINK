function About() {
  return (
    <section id="quienes-somos" className="about-card">
      <h1>Conoce Nuestra APP Nail Link</h1>

      <p>Software de gestión para un SPA de uñas</p>

      <div className="mockup-display">
        <img
          src="/img/somos.jpg"
          alt="Nail Link App Display"
        />
      </div>

      <div className="about-content">

        <h2>Sobre Nail Link</h2>

        <p className="lead-text">
          <span>Nail Link</span> es una aplicación digital diseñada para ayudar
          a los spas a gestionar sus servicios y conectar de manera eficiente
          con sus clientes.
        </p>

        <p className="body-text">
          Nuestra plataforma permite a los negocios optimizar sus procesos de
          reservas, mejorar la organización de citas y brindar una experiencia
          moderna y rápida a sus usuarios.
        </p>

        <div className="highlight-box">
          "Conectamos spas con sus clientes a través de tecnología simple,
          eficiente y accesible."
        </div>

        <p className="footer-note">
          Más control para tu negocio, mejor experiencia para tus clientes.
        </p>

      </div>
    </section>
  );
}

export default About;