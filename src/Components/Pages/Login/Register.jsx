import React, {useState, useEffect} from "react"; // Import React com o useState
import "./Register.css"; // Import CSS
import nftlogin from "../../../Assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg
import Facebook from "../../../Assets/imgs/Facebook.png"; // Import Image from "nftlogin.jpg

// import auth faribase
import { auth } from "../../../Server/FirebaseConfig"; // Import auth from FirebaseConfig
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth'; // Import getAuth from firebase/auth

// Import Biblioteca
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Importing react-router-dom
import { BsArrowRight, BsFillUnlockFill, BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

// Create a function component called Login
function Register() {
    // Create a constant called auth
    const [email, setEmail] = useState(''); // Create a constant called email
    const [password, setPassword] = useState(''); // Create a constant called password
    const [confirmPassword, setConfirmPassword] = useState(''); // Create a constant called password
    const [showPassword, setShowPassword] = useState(false); // State to manage show/hide password
    const navigate = useNavigate(); // useNavigate hook for navigation
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const [isAlertVisible, setIsAlertVisible] = useState(false); // State for controlling alert visibility
    const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false); // State for controlling success message visibility
    const [isRegistering, setIsRegistering] = useState(false); // State to manage registration loading
   

    // Altera nome da página
    const location = useLocation(); // Create a constant called location
    useEffect(() => {
        document.title = "Register - NFT Colletion";
    }, [location]);

    // Function to show alert
    const showAlert = (message) => {
        setErrorMessage(message);
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 5000); // Alert disappears after 5 seconds
    };

    // Function to show success message
    const showSuccessMessage = () => {
        setIsSuccessMessageVisible(true);
        setTimeout(() => {
            setIsSuccessMessageVisible(false);
            navigate("/"); // redirecionar para a página de login
        }, 5000); // Success message disappears after 5 seconds and then redirect to login
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

    // Funçao para criar um usuário com email e senha
    const handleSignUp = async (e) => {
        e.preventDefault(); // previnir o comportamento padrão da página

        if (!email || !password || !confirmPassword ) {
            showAlert('E-mail e senha são obrigatórios!');
            return;
        } // Verificar se o email e a senha são obrigatórios

        if (password.length < 6) {
            showAlert('A senha deve ter pelo menos 6 caracteres!');
            return;
        } // Verificar se a senha tem pelo menos 6 caracteres

        // Verificar se a senha e a confirmação da senha são iguais
        if (password !== confirmPassword) {
            showAlert('As senhas não são iguais');
            return;
        } // Create user with email and password

       
        const emailExists = await checkIfEmailExists(); // Check if email exists
        if (emailExists) {
            showAlert('Este e-mail já está cadastrado!');
            return;
        } // Verificar se o e-mail já está cadastrado

        try {
            setIsRegistering(true); // Set isRegistering to true
            await createUserWithEmailAndPassword(auth, email, password);
            showSuccessMessage(); // Show success message
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                showAlert('Este e-mail já está cadastrado!');
            } else {
                showAlert(error.message);
            }
        } finally {
            setIsRegistering(false); // Set isRegistering to false
        }
    }
    
    // Function to handle show/hide password
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    } // Mostra ou oculta a senha

   
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
                                type="email"
                                name="email"
                                placeholder="Adicione seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="InputWithIcon">
                            <BsFillUnlockFill className="InputIcon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Criar senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <div className="InputWithIcon">
                            <BsFillUnlockFill className="InputIcon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirme sua senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <div className="CheckBox">
                            <input type="checkbox" id="showPassword" checked={showPassword} onChange={handleShowPassword} />
                            <label htmlFor="showPassword">Mostrar senha</label>
                        </div>

                        {isAlertVisible && (
                            <div className="alert">
                                {errorMessage}
                            </div>
                        )}

                        {isSuccessMessageVisible && (
                            <div className="success">
                                Usuário cadastrado com sucesso!
                            </div>
                        )}

                    </form>

                    <button className="BtnRegister" type="button" onClick={handleSignUp} disabled={isRegistering}>
                        {isRegistering ? 'Cadastrando...' : 'Cadastrar'} <i><BsArrowRight /></i>
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


export default Register; // Export the component