import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../../useLocalStorage";
import Ayuda from "../Ayuda/Ayuda";
import { BotonAyuda, CajaBotones } from "./Caja.styles";


const Caja = ({ onSomeEvent }) => {
  const [pag, setPag] = useLocalStorage("pag", 1);
  const [idiom, setIdiom] = useLocalStorage("idiom", 1);
  const [totalWeb, setTotalWeb] = useLocalStorage("precioWeb", 0);

  const [mostrar, setMostrar] = useState(false);
  const [cantidad, setCantidad] = useState(0);
  const [clase, setClase] = useState("");

  useEffect(() => {
    setTotalWeb(pag * idiom * 30);
  }, [pag, idiom, setTotalWeb]);

  return (
    <>
      <Ayuda isOpen={mostrar} onClose={() => setMostrar(false)} cantidad={cantidad} clase={clase} />
      <label>
        Número de páginas
        <CajaBotones>
          <button
            onClick={() => {
              setPag(pag + 1);
              onSomeEvent(idiom * (pag + 1) * 30);
            }}
          >
            +
          </button>
          <input
            type="number"
            min="1"
            value={pag}
            onChange={(e) => {
              setPag(e.target.value);
              onSomeEvent(e.target.value * idiom * 30);
            }}
          />
          <button
            onClick={() => {
              setPag(pag - 1);
              onSomeEvent(idiom * (pag - 1) * 30);
            }}
          >
            -
          </button>
          <BotonAyuda onClick={() => {setMostrar(true); setClase("páginas"); setCantidad(pag)}}>i</BotonAyuda>
        </CajaBotones>
      </label>
      <label>
        Número de idiomas
        <CajaBotones>
          <button
            onClick={() => {
              setIdiom(idiom + 1);
              onSomeEvent((idiom + 1) * pag * 30);
            }}
          >
            +
          </button>
          <input
            type="number"
            min="1"
            value={idiom}
            onChange={(e) => {
              setIdiom(e.target.value);
              onSomeEvent(e.target.value * pag * 30);
            }}
          />
          <button
            onClick={() => {
              setIdiom(idiom - 1);
              onSomeEvent((idiom - 1) * pag * 30);
            }}
          >
            -
          </button>
          <BotonAyuda onClick={() => {setMostrar(true); setClase("idiomas"); setCantidad(idiom)}}>i</BotonAyuda>
        </CajaBotones>
      </label>
      <h5>Precio: {totalWeb}€</h5>
    </>
  );
};

Caja.propTypes = {
  onSomeEvent: PropTypes.func,
};

export default Caja;
