import React from "react"; // Import React
import "./Register.css"; // Import CSS
import nftlogin from "../../../Assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg
import Facebook from "../../../Assets/imgs/Facebook.png"; // Import Image from "nftlogin.jpg

// Import Biblioteca
import { BrowserRouter as Route, Link, } from 'react-router-dom'; // Importing react-router-dom
import { BsArrowRight, BsFillUnlockFill, BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

// Create a functional component called Login
function Login() {
    return (
        <main className="RegisterContainer">

            <section className="RegisterContainerLeft">
                <img src={nftlogin} alt="Nft Login" />
            </section>

            <section className="RegisterConatinerRight">
                <div className="EntradaRegister">
                    <div className="RegisterHeader">
                        <span>Cadastro</span>
                    </div>


                    <form className="FormRegister">

                        <div className="InputWithIcon">
                            <BsFillPersonFill className="InputIcon" />
                            <input
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Nome de Usuário"
                            />
                        </div>

                        <div className="InputWithIcon">
                            <BsFillUnlockFill className="InputIcon" />
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Crie sua senha"
                            />
                        </div>
                        
                        <div className="InputWithIcon">
                            <BsFillUnlockFill className="InputIcon" />
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Confirme sua senha"
                            />
                        </div>
                        <div className="CheckBox">
                            <input type="checkbox" id="showPassword" />
                            <label htmlFor="showPassword">Mostrar senha</label>
                        </div>

                    </form>

                    <button className="BtnRegister" type="submit">
                        Cadastrar <i><BsArrowRight /></i>
                    </button>

                    <div className="Divider">
                        <span className="DividerLine"></span>
                        <span className="DividerText">ou</span>
                        <span className="DividerLine"></span>
                    </div>

                    <div className="SocialRegister">
                        <button className="BtnGoogleRegister">
                            <FcGoogle />
                        </button>
                        <button className="BtnFacebookRegister">
                            <img src={Facebook} alt="Facebook" title="Register com Facebook" />
                        </button>
                    </div>

                    <div className="RegisterFooter">
                        <span>Já possue uma conta?</span>
                        <Link to="/">Login aqui!</Link>
                    </div>

                </div>
            </section>

        </main>
    );

}


export default Login; // Export the component