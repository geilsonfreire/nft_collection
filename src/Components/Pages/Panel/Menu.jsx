import React, { useEffect } from "react";
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom
import "./Menu.css"; /* import the Menu.css file */
import Logo from "../../../Assets/imgs/logo.gif"; /* import the logo.gif file */
import {
    FaHome,
    FaDelicious,
    FaShoppingCart,
    FaWallet,
    FaChartLine,
    FaRegClock,
    FaCog,
    FaSignOutAlt,
} from "react-icons/fa"; /* import the react-icons/fa file */

function Menu() {
    useEffect(() => {
        const mainMenuLi = document.getElementById("mainMenu").querySelectorAll("li");

        function changeActive() { /* função para mudar a classe active */
            mainMenuLi.forEach(n => n.classList.remove("active")); /* removendo a classe active */
            this.classList.add("active"); /* adicionando a classe active */
        };
        mainMenuLi.forEach((n) => n.addEventListener("click", changeActive)); /* adicionando evento de click */
    }, []);

    return ( /* return menu latarel */
        <menu>
            <Link to="/Home">
                <img src={Logo} alt="Logo da pagina" />
            </Link>

            <ul id="mainMenu">
                <Icon to="/Home" icon={<FaHome />} title="Home"/> {/* page Home */}
                <Icon to="/" icon={<FaDelicious />} title="Dashboard"/> {/* page Dashboard */}
                <Icon to="/" icon={<FaShoppingCart />} title="Produtos" /> {/* page Products */}
                <Icon to="/" icon={<FaWallet />} title="Carteira" /> {/* page Wallet */}
                <Icon to="/" icon={<FaChartLine />} title="Gráficos" /> {/* page Reports */}
                <Icon to="/" icon={<FaRegClock />} title="Histórico" /> {/* page History */}
            </ul>
            <ul className="lasttMenu">
                <Icon to="/" icon={<FaCog />} title="Configurações" /> {/* page Settings */}
                <Icon to="/" icon={<FaSignOutAlt />} title="Sair" /> {/* page Logout */}
            </ul>
        </menu>
    );
};

const Icon = ({to, icon, title }) => ( // Icon component
    <li>
        <Link to={to} title={title}>
            {icon}
        </Link>   
    </li>
);

export default Menu; /* export the Menu component */