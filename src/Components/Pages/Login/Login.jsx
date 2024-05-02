import React, { useState, useEffect } from "react"; // Import React
import "./Login.css"; // Import CSS
import nftlogin from "../../../Assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg
import Facebook from "../../../Assets/imgs/Facebook.png"; // Import Image from "nftlogin.jpg

// import auth faribase hook 
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../Server/FirebaseConfig";

// Import Biblioteca
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importing react-router-dom
import { BsArrowRight, BsFillUnlockFill, BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { fetchSignInMethodsForEmail, getAuth } from "firebase/auth";


// Create a functional component called Login
function Login() {
    // Create a constant called auth
    const [email, setEmail] = useState(''); // Create a constant called email
    const [password, setPassword] = useState(''); // Create a constant called password
    const [showPassword, setShowPassword] = useState(false); // State to manage show/hide password
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth); // Autenticar um usuário com email e senha
    const navigate = useNavigate(); // Estado e navegaçao entre pages
    const location = useLocation(); // Create a constant called location
    const [loading, setLoading] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const [isAlertVisible, setIsAlertVisible] = useState(false); // State for controlling alert visibility


    // Altera nome da página
    useEffect(() => {
        document.title = "Login - NFT Colletion";
        if (user) {
            setLoading(false);
            navigate("/Home")
        } // Redirecionando para a pagina Home
    }, [location, user, navigate]);

    // Function to show alert
    const showAlert = (message) => {
        setErrorMessage(message);
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 5000); // Alert disappears after 5 seconds
    };

    // Função para verificar se o e-mail já está cadastrado
    const checkIfEmailExists = async () => {
        try {
            const auth = getAuth();
            const methods = await fetchSignInMethodsForEmail(auth, email);
            return methods.length > 0;
        } catch (error) {
            console.error("Erro na checagem do email", error);
            return false;
        }
    };


    // funçao para autenticar um usuário com email e senha
    const handleSignIn = async (e) => {
        e.preventDefault(); // previnir o comportamento padrão da página

        if (!email || !password) {
            showAlert("Por favor, preencha todos os campos!");
            return;
        }


        setLoading(true);
        const emailExists = await checkIfEmailExists();
        if (!emailExists) {
            setLoading(false);
            showAlert("E-mail ou senha inválidos!");
            return;
        }
        await signInWithEmailAndPassword(email, password);
        setLoading(false);
    
    }

    if (loading) {
        return (
            <div className="loading-container">
                <p>Entrando...</p>
            </div>
        );
    }
    if (error) { return (<div><p>Error: {error.message}</p></div>); }

    

    // Function to handle show/hide password
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    } // Mostra ou oculta a senha



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
                                type="email"
                                name="email"
                                placeholder="Usuario com e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="InputWithIcon">
                            <BsFillUnlockFill className="InputIcon" />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Senha"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="CheckBox">
                            <input type="checkbox" id="showPassword" checked={showPassword} onChange={handleShowPassword} />
                            <label htmlFor="showPassword">Mostrar senha</label>
                        </div>

                        {isAlertVisible && (
                            <div className="alertLogin">
                                {errorMessage}
                            </div>
                        )}

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