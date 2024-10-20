// Imports Bibliotecas
import { useState, useEffect } from "react"; // Import React com o useState
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

// Import CSS
import "./register.css"; 
import "./@register.css";

// Import Images ou Icons
import nftlogin from "../../assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg
import Facebook from "../../assets/imgs/facebook.png"; // Import Image from "nftlogin.jpg
import { BsArrowRight, BsFillUnlockFill, BsFillPersonFill, BsFillEnvelopeAtFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

// import auth faribase
import { auth } from "../../server/firebaseConfig"; 
import {
    updateProfile,
    getAuth,
    createUserWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    sendEmailVerification,
} from 'firebase/auth'; 

// Create a function component called Login
const Register = () => {
    // Create a constant called auth
    const [name, setName] = useState(''); // Estado para gerenciar o nome
    const [email, setEmail] = useState(''); // Create a constant called email
    const [password, setPassword] = useState(''); // Create a constant called password
    const [confirmPassword, setConfirmPassword] = useState(''); // Create a constant called password
    const [showPassword, setShowPassword] = useState(false); // State to manage show/hide password
    const navigate = useNavigate(); // useNavigate hook for navigation
    const [isRegistering, setIsRegistering] = useState(false); // State to manage registration loading


    // Altera nome da página
    const location = useLocation(); // Create a constant called location
    useEffect(() => {
        document.title = "Register - NFT Colletion"; // Altera o título da página
    }, [location]);


    // Função para verificar se o e-mail já está cadastrado
    const checkIfEmailExists = async () => { // Declaar funçao assincrona
        try {
            const auth = getAuth(); // Declara comstante auth recebendo getauth
            const methods = await fetchSignInMethodsForEmail(auth, email); // Declarar const methos recebendo wait fet de auth e email
            return methods.length > 0; // retorna qauntidade dos methods
        } catch (error) {
            console.error("Erro na checagem do email", error); // Apresentar erro no console
            return false; // Retorno como falso
        }
    };

    // Funçao para verificar se formato do email e valido
    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Funçao para criar um usuário com email e senha
    const handleSignUp = async (e) => {
        e.preventDefault(); // previnir o comportamento padrão da página

        if (!email || !password || !confirmPassword || !name) {
            toast.error('Name, E-mail e senha são obrigatórios!');
            return;
        } // Verificar se Nome, email e a senha foram iseridos

        if (!isEmailValid(email)) {
            toast.error("Email invalido");
            return;
        } // Verificando e email e valido 

        if (password.length < 6) {
            toast.error('A senha deve ter pelo menos 6 caracteres!');
            return;
        } // Verificar se a senha tem pelo menos 6 caracteres


        if (password !== confirmPassword) {
            toast.error('As senhas não são iguais');
            return;
        }  // Verificar se a password e confirmPassword são iguais 


        const emailExists = await checkIfEmailExists(); // Verificar se email exists
        if (emailExists) { // Se emil existir 
            toast.error('Este e-mail já está cadastrado!'); // apresentar alert
            return;
        } // Verificar se o e-mail já está cadastrado

        try {
            setIsRegistering(true); // Definir isRegistering como true
            const userCredencial = await createUserWithEmailAndPassword(auth, email, password); // Criar usuário com email e senha
            await updateProfile(userCredencial.user, { displayName: name }); // Atualizar o nome do usuário
            await sendEmailVerification(auth.currentUser); // Enviar e-mail de verificação
            toast.success('Usuário cadastrado com sucesso!');
            setTimeout(() => {
                navigate("/Login"); // Redirecionar para a página de login após 5 segundos
            }, 5000);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                toast.error('Este e-mail já está cadastrado!'); // Apresentar alert
            } else {
                toast.error(error.message); // Apresentar alert de erro
            }
        } finally {
            setIsRegistering(false); // Definir isRegistering como truee
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
                                type="text"
                                name="name"
                                placeholder="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="InputWithIcon">
                            <BsFillEnvelopeAtFill className="InputIcon" />
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
                    </form>

                    <button className="BtnRegister" type="button"
                        onClick={handleSignUp}
                        disabled={isRegistering}
                    >
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


export default Register; 