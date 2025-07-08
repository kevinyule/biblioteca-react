import Navbar from "./components/Navbar";
import Libros from "./components/Libros";
import LibrosEnPromocion from "./components/LibrosEnPromocion";
import MasComprados from "./components/MasComprados";
import CarruselProximos from "./components/CarruselProximos";

function App() {
  return (
    <>
      <CarruselProximos />
      <Navbar />
      <Libros />
      <LibrosEnPromocion />
      <MasComprados />
    </>
  );
}

export default App;
