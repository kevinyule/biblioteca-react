import React from "react";
import "../LibroCard.css";
import { imagenes } from "../data/imagenes";

function LibroCard({ proyecto, seleccionado, onSelect }) {
  // Buscar imagen local o usar ruta externa
  const rutaImagen = imagenes[proyecto.imagen] || proyecto.imagen;

  return (
    <div
      className={`card proyecto-card ${seleccionado ? "seleccionado" : ""}`}
      style={{
        width: "18rem",
        height: "100%",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        position: "relative"
      }}
      onClick={onSelect}
    >
      {/* Cinta superior si está en promoción */}
      {proyecto.promocion && (
        <div
          className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1"
          style={{
            fontSize: "0.75rem",
            fontWeight: "bold",
            zIndex: 1,
            borderBottomRightRadius: "5px"
          }}
        >
          ¡Promoción!
        </div>
      )}

      <img
        src={rutaImagen}
        className="card-img-top"
        alt={proyecto.nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{proyecto.nombre}</h5>
          <p className="card-text">{proyecto.descripcion}</p>

          <p className="fw-bold text-success">
            Precio: ${proyecto.precio.toLocaleString("es-CO")}
            {proyecto.promocion && proyecto.precioOriginal && (
              <span className="text-muted ms-2 text-decoration-line-through">
                ${proyecto.precioOriginal.toLocaleString("es-CO")}
              </span>
            )}
          </p>

          <div className="mb-2">
            {proyecto.tecnologias.map((tec, i) => (
              <span key={i} className="badge bg-primary me-1">
                {tec}
              </span>
            ))}
          </div>
        </div>

        <a
          href={proyecto.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark btn-sm mt-auto"
        >
          Ver
        </a>
      </div>
    </div>
  );
}

export default LibroCard;
