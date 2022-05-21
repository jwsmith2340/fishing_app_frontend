import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import '../public/styles/Header.scss'

function Header(props) {

    const [button, setButton] = useState('closed');

    function changeButton() {
        if (button === 'closed') {
            setButton('open');
        } else {
            setButton('closed');
        }
    }

    return (
        <div className="navbar">
        <div className="mob-hamburger-box">
            <h4 id="mob-header-hamburger-fa"><FaBars className={button} onClick={ changeButton }/></h4>
        </div>
    </div>
    );
}

export default Header