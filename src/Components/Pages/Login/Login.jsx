import React from "react"; // Import React
import "./Login.css"; // Import CSS
import nftlogin from "../../../Assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg

// Import Biblioteca de Icones
import { BsArrowRight } from "react-icons/bs";

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