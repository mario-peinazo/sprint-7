import Presupuesto from "../components/Presupuesto/Presupuesto";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const PresupuestoApp = () => {

  const hijoAPadre = (datosHijo) => {
    setParams(datosHijo)
  }

  const [params, setParams] = useSearchParams();
  

  return (
    <>
      <NavLink to="/">Página Bienvenida</NavLink>
      <Presupuesto hijoAPadre={hijoAPadre}/>
    </>
  );
};

export default PresupuestoApp;
