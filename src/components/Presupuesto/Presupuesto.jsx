import { useEffect } from "react";
import Panel from "../Panel/Panel.styles";
import Caja from "../Caja/Caja";
import PropTypes from "prop-types";
import useLocalStorage from "../../useLocalStorage";

const Presupuesto = () => {
  const [datos, setDatos] = useLocalStorage("datos", [
    { id: 0, texto: "Una página web - 500€", precio: 500, checked: false },
    { id: 1, texto: "Una consultoría SEO - 300€", precio: 300, checked: false },
    { id: 2, texto: "Una Campaña de Google Ads - 200€", precio: 200, checked: false },
  ]);

  const [total, setTotal] = useLocalStorage("precio1", 0);
  const [pulsado1, setPulsado1] = useLocalStorage("pulsado", false);
  const [totalWeb, setTotalWeb] = useLocalStorage("totalWeb", 30);
  const [totalP, setTotalP] = useLocalStorage("precioTotal", 0);

  const changePresu = (param) => setTotalWeb(param);

  const handleChange = (e) => {
    const { value, checked, id } = e.target;

    if (checked) {
      setTotal(total + Number(value));
      if (id == 0) {
        setPulsado1(true);
      }
    } else {
      setTotal(total - Number(value));
      if (id == 0) {
        setPulsado1(false);
      }
    }
  };

    const estPulsado = (dato) => {
    setDatos(
      datos.map((d) => (d.id == dato.id ? { ...d, checked: !d.checked } : d))
    );
  };

  useEffect(() => {
    if (pulsado1) {
      setTotalP(total + totalWeb);
    } else {
      setTotalP(total);
    }
  }, [total, totalWeb, pulsado1, setTotalP]);

  return (
    <>
      <div>
        {datos.map((dato) => {
          if (dato.id == 0) {
            return (
              <>
                <div>
                  <label>
                    <input
                      id={dato.id}
                      type="checkbox"
                      value={dato.precio}
                      checked={dato.checked}
                      onChange={(e) => {
                        estPulsado(dato);
                        handleChange(e);
                      }}
                    />
                    {dato.checked}
                    {dato.texto}
                  </label>
                </div>
                <Panel mostrar={pulsado1}>
                  <Caja onSomeEvent={changePresu} />
                </Panel>
              </>
            );
          } else {
            return (
              <>
                <div>
                  <label>
                    <input
                      id={dato.id}
                      type="checkbox"
                      value={dato.precio}
                      checked={dato.checked}
                      onChange={(e) => {
                        estPulsado(dato);
                        handleChange(e);
                      }}
                    />
                    {dato.texto}
                  </label>
                </div>
              </>
            );
          }
        })}
      </div>
      <h2>Precio total: {totalP}€</h2>
    </>
  );
};

Presupuesto.propTypes = {
  onSomeEvent: PropTypes.func,
};

export default Presupuesto;
