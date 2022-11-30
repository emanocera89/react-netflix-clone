import React, { useState, useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import './Search.css';

function Search() {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const searchRef = useRef();
    const inputRef = useRef();
    const navigate = useNavigate();

    // clickea afuera del componente de búsqueda
    const handleClickOutside = e => {
        if (showInput) {
            if (!searchRef.current.contains(e.target)) {
                if (inputValue.length === 0) {
                    setShowInput(false);
                }
            }
        }
    };

    // listener del evento mousedown
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    // muestra el input de búsqueda
    const handleShowInput = () => {
        setShowInput(true);
        setTimeout(() => {
            inputRef.current.focus();
        }, 100);
    }

    // controla el cambio de valor del input de búsqueda
    const handleChangeInputValue = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.length > 0) {
            navigate(`/search/${value}`, { replace: true });
        } else {
            navigate(`/`, { replace: true });
        }
    }
    
    // limpia el campo de búsqueda
    const handleClearInput = () => {
        setInputValue('');
        inputRef.current.focus();
        navigate(`/`, { replace: true });
    }

    return (
        <div className="search-container">
            {showInput &&
                <div className="search-input-container" ref={searchRef}>
                    <div className="search-icon-container">
                        <BiSearch className="search-icon" />
                    </div>
                    <input ref={inputRef} type="text" placeholder="Títulos, personas, géneros" value={inputValue} onChange={handleChangeInputValue} />
                    {inputValue.length > 0 &&
                        <button className="clear-button" onClick={handleClearInput}><IoIosClose /></button>
                    }
                </div>
            }
            {!showInput &&
                <button className="search-button" onClick={handleShowInput}><BiSearch /></button>
            }
            <input className="input-search-mobile" placeholder="Buscar" value={inputValue} onChange={handleChangeInputValue} />
        </div>
    )
}

export default Search;