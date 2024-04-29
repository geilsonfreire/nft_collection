import React, { useState, useEffect } from "react"; // Import React
import "./Login.css"; // Import CSS
import nftlogin from "../../../Assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg
import Facebook from "../../../Assets/imgs/Facebook.png"; // Import Image from "nftlogin.jpg

// import auth faribase hook 
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../Server/FirebaseConfig";

// Import Biblioteca
import { Link, useLocation } from 'react-router-dom'; // Importing react-router-dom
import { BsArrowRight, BsFillUnlockFill, BsFillPersonFill } from "react-icons/bs";
import { FcGoogle} from "react-icons/fc";

// Create a functional component called Login
function Login() {
    // Create a constant called auth
    const [email, setEmail] = useState(''); // Create a constant called email
    const [password, setPassword] = useState(''); // Create a constant called password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth); // Autenticar um usuário com email e senha

    // Altera nome da página
    const location = useLocation(); // Create a constant called location
    useEffect(() => {
        document.title = "Login - NFT Colletion";
    }, [location]);
    
    // funçao para autenticar um usuário com email e senha
    function handleSignIn(e) {
        e.preventDefault(); // previnir o comportamento padrão da página
        signInWithEmailAndPassword(email, password); // Autenticar um usuário com email e senha
    }

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.user.email}</p>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }


   
    return (
        <main className="LoginContainer">

            <section className="LoginContainerLeft">
                <img src={nftlogin} alt="Nft Login" />
            </section>

            <section className="LoginConatinerRight">
                <div className="EntradaLogin">
                    <div className="LoginHeader">
                        <span>Login</span>
                    </div>


                    <form className="FormLogin">

                        <div className="InputWithIcon">
                            <BsFillPersonFill className="InputIcon" />
                            <input
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Usuario com e-mail"
                                onChange={(e) => setEmail(e.target.value)}  
                            />
                        </div>

                        <div className="InputWithIcon">
                            <BsFillUnlockFill className="InputIcon" />
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Senha"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="CheckBox">
                            <input type="checkbox" id="showPassword" />
                            <label htmlFor="showPassword">Mostrar senha</label>
                        </div>
                        
                    </form>

                    <a className="EsqueseuSenha" href="/">Esqueceu sua senha ?</a>
                    <button className="BtnLogin" type="submit" onClick={handleSignIn}>
                        Entrar <i><BsArrowRight /></i>
                    </button>

                    <div className="Divider">
                        <span className="DividerLine"></span>
                        <span className="DividerText">ou</span>
                        <span className="DividerLine"></span>
                    </div>

                    <div className="SocialLogin">
                        <button className="BtnGoogleLogin">
                            <FcGoogle />
                        </button>
                        <button className="BtnFacebookLogin">
                            <img src={Facebook} alt="Facebook" title="Login com Facebook" />
                        </button>
                    </div>

                    <div className="LoginFooter">
                        <span>Ainda não tem conta?</span>
                        <Link to="/Register">Criar uma conta</Link>
                    </div>

                </div>
            </section>

        </main>
    );

}


export default Login; // Export the component