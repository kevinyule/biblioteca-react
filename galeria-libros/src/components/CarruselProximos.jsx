import React from "react";
import proximos from "../data/proximos.json";
import { imagenesProximos } from "../data/imagenesProximos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"


function CarruselProximos() {
  return (
    <section className="container py-5" id="proximos">
      <h2 className="text-center mb-4">Próximos a la venta</h2>

      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-ride="carousel"
        data-bs-interval="200"
      >
        <div className="carousel-inner">
          {proximos.map((libro, index) => {
            const ruta = Object.entries(imagenesProximos).find(([key]) =>
              key.includes(libro.imagen)
            )?.[1]?.default;

            return (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={ruta}
                  className="d-block w-100"
                  alt={libro.nombre}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-2 rounded">
                  <h5>{libro.nombre}</h5>
                  <p>{libro.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
}

export default CarruselProximos;
