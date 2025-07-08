import React, { useState, useEffect } from "react";
import datosLibros from "../data/libros.json";
import LibroCard from "./LibroCard";

function Libros() {
  const [libros, setLibros] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    setLibros(datosLibros);
  }, []);

  return (
    <section className="container py-5" id="disponibles">
      <h2 className="text-center mb-4">
        Libros disponibles <span className="text-primary">({libros.length})</span>
      </h2>

      <div className="row justify-content-center g-4">
        {libros.map((libro, index) => (
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

export default Libros;
