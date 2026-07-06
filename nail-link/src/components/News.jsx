function News() {
  return (
    <section id="noticias" className="news">
      <h2>Noticias</h2>

      <div className="news-card">

        <div className="news-text">
          <h3>¡Nuevas funcionalidades disponibles!</h3>

          <p>
            Hemos actualizado Nail Link con mejoras en la gestión de citas,
            optimización del rendimiento y una interfaz más intuitiva para los
            negocios.
          </p>

          <p>
            Seguimos trabajando para ofrecer herramientas que faciliten el
            crecimiento de tu spa y mejoren la experiencia de tus clientes.
          </p>
        </div>

        <div className="news-image">
          <img
            src="/img/noticia2.png"
            alt="Novedades Nail Link"
          />
        </div>

      </div>
    </section>
  );
}

export default News;