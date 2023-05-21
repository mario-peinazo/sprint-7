import Presupuesto from "../components/Presupuesto/Presupuesto";
import {NavLink} from 'react-router-dom';

const PresupuestoApp = () => {
    return (
        <>
        <NavLink to="/">Página Bienvenida</NavLink>
          <h1>¿Qué quieres hacer?</h1>
          <Presupuesto />
        </>
      );
}

export default PresupuestoApp;