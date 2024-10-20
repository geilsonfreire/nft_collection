// Imports Bibliotecas
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Imports de Contextos ou components
import { AuthGoogleContext } from "../contexts/authGoogle";




export const PrivateRoutes = () => {
    const { signed } = useContext(AuthGoogleContext); 

    return (
        signed ? <Outlet /> : <Navigate to="/" />
    ); 
}