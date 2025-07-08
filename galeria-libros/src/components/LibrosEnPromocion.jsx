import React, { useState, useEffect } from "react";
import datosLibros from "../data/libros.json";
import LibroCard from "./LibroCard";

function LibrosEnPromocion() {
  const [librosPromocion, setLibrosPromocion] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    const librosConPromo = datosLibros.filter(libro => libro.promocion);
    setLibrosPromocion(librosConPromo);
  }, []);

  return (
    <section className="container py-5" id="promocion">
      <h2 className="text-center mb-4">
        Libros en promoción <span className="text-danger">({librosPromocion.length})</span>
      </h2>

      <div className="row justify-content-center g-4">
        {librosPromocion.map((libro, index) => (
          <div className="col-auto" key={index}>
            <LibroCard
              proyecto={libro}
              seleccionado={seleccionado === index}
              onSelect={() => setSeleccionado(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LibrosEnPromocion;
