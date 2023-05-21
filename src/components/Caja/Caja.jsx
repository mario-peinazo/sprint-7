import { useEffect } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../../useLocalStorage";


const Caja = ({ onSomeEvent }) => {
  const [pag, setPag] = useLocalStorage("pag", 1);
  const [idiom, setIdiom] = useLocalStorage("idiom", 1);
  const [totalWeb, setTotalWeb] = useLocalStorage("precioWeb", 0);

  useEffect(() => {
    setTotalWeb(pag * idiom * 30);
  }, [pag, idiom, setTotalWeb]);

  return (
    <>
      <label>
        Número de páginas
        <div className="cajaBotones">
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
        </div>
      </label>
      <label>
        Número de idiomas
        <div className="cajaBotones">
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
        </div>
      </label>
      <h5>Precio: {totalWeb}€</h5>
    </>
  );
};

Caja.propTypes = {
  onSomeEvent: PropTypes.func,
};

export default Caja;
