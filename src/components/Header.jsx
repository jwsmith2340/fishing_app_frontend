import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import '../public/styles/Header.scss'

function Header(props) {2
    return (
        <div className="navbar">
        <div className="mob-hamburger-box">
            <h4 id="mob-header-hamburger-fa"><FaBars /></h4>
        </div>
    </div>
    );
}

export default Header