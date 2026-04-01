import logo from '../assets/logo.png'
import menuHamburger from '../assets/menu-hamburger.svg'

export default function Header() {
    return (
        <header>
            <div className="container">
                <a href='http://localhost:5173/' className="title-and-logo">
                    <img className='logo' src={logo} alt="logo" />
                    <h1>MENU MAKER</h1>
                </a>
                <nav>
                    <span>Accueil</span>
                    <span>Exemples</span>
                    <span>langue</span>
                    <span>Contact</span>
                    <span>Se connecter</span>
                </nav>
                <div className="menu-hamburger">
                    <img src={menuHamburger} alt="Image Menu Hamburger" />
                </div>
            </div>
        </header>
    )
}