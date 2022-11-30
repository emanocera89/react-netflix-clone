import React, { useState } from "react";
import Avatar from "../../assets/user1.png";
import Svg from "../Svg/Svg";
import { BiCaretDown } from 'react-icons/bi';
import "./MyAccount.css";


function MyAccount() {
    const [showDropdown, setShowDropdown] = useState(false);

    // muestra el menú desplegable
    const handleShowDropdown = () => {
        setShowDropdown(true);
    }
    
    // oculta el menú desplegable
    const handleHideDropdown = () => {
        setShowDropdown(false);
    }
    return (
        <div className="user-container">
            <a className="user-button" onMouseEnter={handleShowDropdown} onMouseLeave={handleHideDropdown}>
                <img src={Avatar} alt="John Doe" className="user-avatar" />
                <BiCaretDown className="caret-icon" />
                {showDropdown &&
                    <div className="user-dropdown">
                        <ul className="user-list">
                            <li><img src={Avatar}></img> <span>John Doe</span></li>
                            <li><Svg name="pencil" width={24} height={24} color="#fff" /> <span>Administrar perfiles</span></li>
                            <li><Svg name="tranfer" width={24} height={24} color="#fff" /> <span>Transferir perfil</span></li>
                            <li><Svg name="account" width={24} height={24} color="#fff" /> <span>Cuenta</span></li>
                            <li><Svg name="help" width={24} height={24} color="#fff" /> <span>Centro de Ayuda</span></li>
                            <li><span>Cerrar sesión en Netflix</span></li>
                        </ul>
                    </div>
                }
            </a>
        </div>
    )
}

export default MyAccount;