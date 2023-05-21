import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import PresupuestoApp from '../pages/presupuestoApp';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/presupuestoApp" element={<PresupuestoApp/>} />
   
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;