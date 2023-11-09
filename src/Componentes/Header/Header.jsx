import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <img src="/img/Logo.png" alt="" />
            <Nav />
        </header>
    );
}

export default Header;