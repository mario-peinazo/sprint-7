import useLocalStorage from "../../useLocalStorage";
import PropTypes from "prop-types";
import "./Guardar.css";
import { useEffect, useState } from "react";

const GuardarPresu = ({ precio, servicios }) => {
  const [datosForm, setDatosForm] = useLocalStorage("datosForm", []);

  const [nombre, setNombre] = useLocalStorage("nombre", "");
  const [cliente, setCliente] = useLocalStorage("cliente", "");
  const fecha = new Date();

  const [cambio, setCambio] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNombre(nombre);
    setCliente(cliente);
    createNewData(nombre, cliente, precio, servicios);
  };

  function createNewData(nombre, cliente, precio, servicios) {
    setDatosForm([
      ...datosForm,
      {
        fecha: fecha,
        fechaHora: `${fecha.getDate()} / ${
          fecha.getMonth() + 1
        } / ${fecha.getFullYear()} (${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()})`,
        nombre: nombre,
        cliente: cliente,
        precio: precio,
        servicios: servicios,
      },
    ]);
  }

  const ordenar = (n) => {
    switch (n) {
      case 0:
        //NO SÉ CÓMO :(
        break;
      case 1:
        datosForm.sort((x, y) => x.nombre.localeCompare(y.nombre));
        break;
      case 2:
        datosForm.sort((x, y) => x.fechaHora.localeCompare(y.fechaHora));
        break;
    }
    setCambio(!cambio);
  };

  useEffect(() => {}, [cambio]);

  const [buscar, setBuscar] = useState("")

  const buscarPresu = (valor) => {
    setDatosForm(datosForm.filter(b => b.nombre === valor));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div>
          <label>
            Presupuesto:
            <input
              type="text"
              className="inputForm"
              value={nombre}
              placeholder="Prep.1"
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Client@:
            <input
              type="text"
              className="inputForm"
              value={cliente}
              placeholder="Mario Peinazo"
              onChange={(e) => setCliente(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="submit">
          Guardar
        </button>
      </form>

      <table>
        <thead>
        <tr>
            <td>
            <label>
            Buscar:
            <input
              type="text"
              className="inputForm"
              value={buscar}
              placeholder="Presu 8"
              onChange={(e) => setBuscar(e.target.value)}
            />
            <button className="orden orange" onClick={() => buscarPresu(buscar)}>
                Buscar
              </button>
          </label>
            </td>
          </tr>
          <tr>
            <td className="filaBotones">
              Ordenar:
              <button className="orden" onClick={() => ordenar(1)}>
                Nombre
              </button>
              <button className="orden" onClick={() => ordenar(2)}>
                Fecha
              </button>
              <button className="orden" onClick={() => ordenar(0)}>
                Reiniciar
              </button>
            </td>
          </tr>
          <tr>
            <th>
              <h3>Presupuestos:</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {datosForm.map((d, index) => {
            return (
              <>
                <tr>
                  <th>
                    {`${index}- `}
                    <u>{`${d.nombre} · ${d.fechaHora}`}</u>
                  </th>
                </tr>
                <tr>
                  <td>
                    {`${d.cliente} · ${
                      d.precio
                    }€ · Servicios: ${d.servicios.map((s) => ` ${s}`)}`}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

GuardarPresu.propTypes = {
  precio: PropTypes.number,
  servicios: PropTypes.array,
};

export default GuardarPresu;
