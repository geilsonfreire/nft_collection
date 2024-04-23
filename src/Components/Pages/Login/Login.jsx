import React from "react"; // Import React
import "./Login.css"; // Import CSS
import nftlogin from "../../../Assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg
import Facebook from "../../../Assets/imgs/Facebook.png"; // Import Image from "nftlogin.jpg

// Import Biblioteca
import { BrowserRouter as Route, Link,} from 'react-router-dom'; // Importing react-router-dom
import { BsArrowRight, BsFillUnlockFill, BsFillPersonFill } from "react-icons/bs";
import { FcGoogle} from "react-icons/fc";

// Create a functional component called Login
function Login() {
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
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Usuário"
                            />
                        </div>

                        <div className="InputWithIcon">
                            <BsFillUnlockFill className="InputIcon" />
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Senha"
                            />
                        </div>
                        <div className="CheckBox">
                            <input type="checkbox" id="showPassword" />
                            <label htmlFor="showPassword">Mostrar senha</label>
                        </div>
                        
                    </form>

                    <a className="EsqueseuSenha" href="/register">Esqueceu sua senha ?</a>
                    <button className="BtnLogin" type="submit">
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