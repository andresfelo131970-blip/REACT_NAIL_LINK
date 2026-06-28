import { useState } from "react";

function Services() {

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      titulo: "Gestión de citas en línea",
      imagen: "/img/cita.png",
      descripcion:
        "Permite a los clientes reservar citas desde cualquier dispositivo, consultar horarios disponibles y recibir confirmaciones automáticas."
    },

    {
      titulo: "Control de clientes",
      imagen: "/img/cliente.png",
      descripcion:
        "Administra la información de los clientes, historial de servicios, preferencias y datos de contacto."
    },

    {
      titulo: "Recordatorios automáticos",
      imagen: "/img/recordatorio.png",
      descripcion:
        "Envía recordatorios automáticos para reducir cancelaciones y mejorar la asistencia a las citas."
    },

    {
      titulo: "Control de agendas",
      imagen: "/img/agenda.png",
      descripcion:
        "Organiza la disponibilidad del personal y evita conflictos entre horarios."
    },

    {
      titulo: "Inventario",
      imagen: "/img/inventario.png",
      descripcion:
        "Controla productos, materiales y existencias en tiempo real."
    },

    {
      titulo: "Facturación",
      imagen: "/img/factura.png",
      descripcion:
        "Genera facturas de los servicios prestados y mantiene un registro de ventas."
    },

    {
      titulo: "Panel administrativo",
      imagen: "/img/administracion.png",
      descripcion:
        "Permite administrar usuarios, servicios, clientes y configuraciones del sistema."
    },

    {
      titulo: "Reportes",
      imagen: "/img/reporte.png",
      descripcion:
        "Genera reportes de ventas, clientes, citas e ingresos para apoyar la toma de decisiones."
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-light">

      <h2>Funcionalidades</h2>

      <div className="services-grid">

        {services.map((service) => (

          <div
            key={service.titulo}
            className="service-card"
            onClick={() => setSelectedService(service)}
          >

            <p>{service.titulo}</p>

            <img src={service.imagen} alt={service.titulo}/>

          </div>

        ))}

      </div>

      {selectedService && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedService(null)}
        >

          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >

           {/* Imagen logo */}
           <img
            src="/img/nail_link.jpg"
            alt="Nail Link"
            className="modal-banner"
           />

            {/* Imagen de la funcionalidad */}
             <img
              src={selectedService.imagen}
              alt={selectedService.titulo}
              className="modal-service-img"
             />

             <h3>{selectedService.titulo}</h3>

             <p>{selectedService.descripcion}</p>

            <button
              className="btn-modal"
              onClick={() => setSelectedService(null)}
            >
              Cerrar
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Services;