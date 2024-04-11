import React from "react"; 
import "../Components/Menu.css"; /* import the Menu.css file */
import Logo from "../Assets/imgs/logo.gif";

function Menu() {
  return <menu className="Menu">
    <img src={Logo} alt="Logo da pagina" />
  </menu>
}

export default Menu; /* export the Menu component */