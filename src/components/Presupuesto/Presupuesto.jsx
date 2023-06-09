import { useEffect } from "react";
import Panel from "../Panel/Panel.styles";
import Caja from "../Caja/Caja";
import PropTypes from "prop-types";
import useLocalStorage from "../../useLocalStorage";
import GuardarPresu from "../GuardarPresu/GuardarPresu";

const Presupuesto = ( { hijoAPadre } ) => {

  const [datos, setDatos] = useLocalStorage("datos", [
    {
      id: 0,
      texto: "Una página web - 500€",
      precio: 500,
      checked: false,
      servicio: "Web",
    },
    {
      id: 1,
      texto: "Una consultoría SEO - 300€",
      precio: 300,
      checked: false,
      servicio: "SEO",
    },
    {
      id: 2,
      texto: "Una Campaña de Google Ads - 200€",
      precio: 200,
      checked: false,
      servicio: "GoogleAds",
    },
  ]);

  const [total, setTotal] = useLocalStorage("precio1", 0);
  const [pulsado, setPulsado] = useLocalStorage("pulsado", false);
  const [totalWeb, setTotalWeb] = useLocalStorage("totalWeb", 30);
  const [totalP, setTotalP] = useLocalStorage("precioTotal", 0);

  const [envDatos, setEnvDatos] = useLocalStorage({web: false, seo: false, googleads: false})

  const changePresu = (param) => setTotalWeb(param);

  const handleChange = (e) => {
    const { value, checked, id} = e.target;

    setDatos(
      datos.map((d) => (d.id == id ? { ...d, checked: !d.checked } : d))
    );

    if (checked) {
      setTotal(total + Number(value));
      if (id == 0) {
        setPulsado(true);
      }
    } else {
      setTotal(total - Number(value));
      if (id == 0) {
        setPulsado(false);
      }
    }

    setEnvDatos({web: datos[0].checked, seo: datos[1].checked, googleads: datos[2].checked})
    hijoAPadre(envDatos)
  };

  useEffect(() => {
    if (pulsado) {
      setTotalP(total + totalWeb);
    } else {
      setTotalP(total);
    }

  }, [total, totalWeb, pulsado, setTotalP]);

  return (
    <div style={{display:"flex", gap:"100px"}}>
      <div>
        <h1>Calcular presupuesto</h1>
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
                      onChange={(e) => handleChange(e)}
                    />
                    {dato.checked}
                    {dato.texto}
                  </label>
                </div>
                <Panel mostrar={pulsado}>
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
                      onChange={(e) => handleChange(e)}
                    />
                    {dato.texto}
                  </label>
                </div>
              </>
            );
          }
        })}
      <h2>Precio total: {totalP}€</h2>
      </div>
      <GuardarPresu precio={totalP} servicios={datos.filter(s => s.checked === true).map(d => d.servicio)}/>
    </div>
  );
};

Presupuesto.propTypes = {
  onSomeEvent: PropTypes.func,
  hijoAPadre: PropTypes.func
};

export default Presupuesto;
