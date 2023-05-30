import Presupuesto from "../components/Presupuesto/Presupuesto";
import {NavLink} from 'react-router-dom';

const PresupuestoApp = () => {
    return (
        <>
        <NavLink to="/">Página Bienvenida</NavLink>
          <Presupuesto />
        </>
      );
}

export default PresupuestoApp;