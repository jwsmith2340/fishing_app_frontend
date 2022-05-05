import { Link } from 'react-router-dom'
import '../public/styles/Header.scss'
import { FaBars } from 'react-icons/fa'

function Header(props) {
    return (
        <div className="navbar">
        <div className="mob-hamburger-box">
            <h4 id="mob-header-hamburger-fa"><FaBars /></h4>
        </div>
    </div>
    );
}

export default Header