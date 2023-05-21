import { NavLink } from 'react-router-dom';

const Home = () => {

        return (
          <>
            <h1>¡Bienvenid@!</h1>
            <p>🤑 Si pulsas en el enlace inferior podrás acceder a la aplicación para calcular tu presupuesto 🤑</p>
            <NavLink to="/presupuestoApp">App Presupuesto</NavLink>
          </>
        );
}

export default Home;