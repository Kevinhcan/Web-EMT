import "./App.css";
import Navbar from "./components/Navbar";
import Portada from "./components/Portada";

function App() {
  return (
    <>
      <header className="Encabezado">
        <div className="Indice">
          <Portada></Portada>
          <Navbar></Navbar>

        </div>
      </header>
    </>
  );
}

export default App;
