import React, { useState, useEffect } from "react";
import datosLibros from "../data/libros.json";
import LibroCard from "./LibroCard";

function MasComprados() {
  const [librosPopulares, setLibrosPopulares] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    // Filtra y ordena por número de compras
    const populares = datosLibros
      .filter((libro) => libro.compras >= 200)
      .sort((a, b) => b.compras - a.compras);

    setLibrosPopulares(populares);
  }, []);

  return (
    <section className="container py-5" id="mas-comprados">
      <h2 className="text-center mb-4">
        Los más comprados{" "}
        <span className="text-primary">({librosPopulares.length})</span>
      </h2>

      <div className="row justify-content-center g-4">
        {librosPopulares.map((libro, index) => (
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

export default MasComprados;
