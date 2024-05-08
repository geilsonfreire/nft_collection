import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Server/FirebaseConfig"

const provider = new GoogleAuthProvider();  // Create a constant called provider

export const AuthGoogleContext = createContext({}); // Create a constant called AuthGoogleContext

export const AuthGoogleProvider = ({ children }) => {
    const auth = getAuth(app); // Create a constant called auth
    const [user, setUser] = useState(null); // Estado inicial do usuário
    const [loading, setLoading] = useState(false); // Estado inicial do loading

    useEffect(() => {
        const loadStorage = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token"); // Recuperar o token do sessionStorage
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user"); // Recuperar o usuário do sessionStorage
            if (sessionToken && sessionUser) {
                setUser(JSON.parse(sessionUser)); // Salvar o usuário no estado
            }
        }
        loadStorage();
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
            } else {
                setUser(null);
                sessionStorage.removeItem("@AuthFirebase:user");
            }
        });
        return () => unsubscribe(); // Limpa o observador quando o componente é desmontado
    }, []);


    const signInGoogle = async () => {
        setLoading(false); // Ativar loading
        try {
            const result = await signInWithPopup(auth, provider); // Autenticar com o Google
            const credential = GoogleAuthProvider.credentialFromResult(result); // Recuperar credenciais
            const token = credential.accessToken; // Recuperar token
            const user = result.user; // Recuperar usuário

            setUser(user); // Salva o usuário no estado
            sessionStorage.setItem("@AuthFirebase:token", token); // Salva o token no sessionStorage
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user)); // Salva o usuário no sessionStorage
            setLoading(false); // Desativar loading
            return user; // Retornar o usuário autenticado

        } catch (error) {
            console.error("Erro ao fazer login com Google: ", error);
            throw error; // Propagar o erro
            // showAlert("Erro ao tentar login com Google: " + error.message);
        } finally {
            setLoading(false); // Desativar loading
        }
    };


    return (
        <AuthGoogleContext.Provider
            value={{ signInGoogle, signed: !!user, loading }}>
            {children}
        </AuthGoogleContext.Provider>
    );

};