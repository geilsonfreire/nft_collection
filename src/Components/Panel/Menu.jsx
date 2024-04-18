import React, {useEffect} from "react"; 
import "./Menu.css"; /* import the Menu.css file */
import Logo from "../../Assets/imgs/logo.gif"; /* import the logo.gif file */
import { 
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
            <img src={Logo} alt="Logo da pagina" />
           
            <ul id="mainMenu"> 
                <Icon icon={<FaDelicious/>}/>
                <Icon icon={<FaShoppingCart/>}/>
                <Icon icon={<FaWallet/>}/>
                <Icon icon={<FaChartLine/>}/>
                <Icon icon={<FaRegClock/>}/>
            </ul> 
            <ul className="lasttMenu"> 
                <Icon icon={<FaCog/>}/>
                <Icon icon={<FaSignOutAlt/>}/>
            </ul>
        </menu>
    );
};

const Icon = ({ icon }) => ( // Icon component
    <li><a href="#">{icon}</a></li>
);

export default Menu; /* export the Menu component */