import React, { useState } from "react";
import Svg from "../Svg/Svg";
import './Notifications.css';
import Thumb from "../../assets/the-last-kingdom-thumb.jpg";

function Notifications() {
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
        <div className="noti-container">
            <a className="noti-button" onMouseEnter={handleShowDropdown} onMouseLeave={handleHideDropdown}>
                <Svg name="bell" width={26} height={26} color="#fff" />
                {showDropdown &&
                    <div className="noti-dropdown">
                        <div className="noti-track">
                            <ul className="noti-list">
                                <li className="noti-li">
                                    <div className="noti-image">
                                        <img src={Thumb} width={112} />
                                    </div>
                                    <div className="noti-info">
                                        <div className="header">Estreno</div>
                                        <div className="body">The Last Kingdom</div>
                                        <div className="age">Hace 4 días</div>
                                    </div>
                                </li>

                                <li className="noti-li">
                                    <div className="noti-image">
                                        <img src={Thumb} width={112} />
                                    </div>
                                    <div className="noti-info">
                                        <div className="header">Estreno</div>
                                        <div className="body">The Last Kingdom</div>
                                        <div className="age">Hace 4 días</div>
                                    </div>
                                </li>

                                <li className="noti-li">
                                    <div className="noti-image">
                                        <img src={Thumb} width={112} />
                                    </div>
                                    <div className="noti-info">
                                        <div className="header">Estreno</div>
                                        <div className="body">The Last Kingdom</div>
                                        <div className="age">Hace 4 días</div>
                                    </div>
                                </li>

                                <li className="noti-li">
                                    <div className="noti-image">
                                        <img src={Thumb} width={112} />
                                    </div>
                                    <div className="noti-info">
                                        <div className="header">Estreno</div>
                                        <div className="body">The Last Kingdom</div>
                                        <div className="age">Hace 4 días</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </a>
        </div>
    )
}

export default Notifications;