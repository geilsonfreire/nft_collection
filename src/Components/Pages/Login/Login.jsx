import React from "react"; // Import React
import "./Login.css"; // Import CSS
import nftlogin from "../../../Assets/imgs/nftlogin.jpg"; // Import Image from "nftlogin.jpg

// Create a functional component called Login
function Login() {
    return (
        <div className="Container">
            <img src={nftlogin} alt="Nft Login" />
            <div className="ConatinerLogin">
                <div className="wrapLogin">
                    <form className="FormLogin">
                        <span className="LoginFormTitle">Bem Vindo</span>
                        
                    </form>
                </div>
            </div>
        </div>
    );

}


export default Login; // Export the component