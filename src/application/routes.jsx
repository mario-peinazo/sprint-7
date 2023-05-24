import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Presupuesto from '../components/Presupuesto/Presupuesto';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/presupuesto" element={<Presupuesto/>} />

            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;