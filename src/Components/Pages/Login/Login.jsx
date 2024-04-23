import React from "react"; // Import React
import "./Login.css"; // Import CSS
import nftlogin from "../../../Assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg
import Facebook from "../../../Assets/imgs/Facebook.png"; // Import Image from "nftlogin.jpg

// Import Biblioteca de Icones
import { BsArrowRight, BsDashLg } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

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
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Usuario"
                        />

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Senha"
                        />
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
                        <a href="/register">Criar uma conta</a>
                    </div>

                </div>
            </section>

        </main>
    );

}


export default Login; // Export the component