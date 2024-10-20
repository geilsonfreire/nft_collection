// Import biblioteca
import { Routes, Route } from 'react-router-dom';

// Import Componentes
import Login from '../pages/login/login';
import Register from '../pages/login/register';
import Home from '../pages/home/home';
import { PrivateRoutes } from './privateRoutes';

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            
            <Route path="/Home" element={<PrivateRoutes />}> 
                <Route path="/Home" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
