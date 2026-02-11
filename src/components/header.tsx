import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header>
            <div className="container">
                <a href='http://localhost:5173/' className="title-and-logo">
                    <h1>MENU MAKER <span>by</span></h1>
                    <img className='logo' src={logo} alt="logo" />
                </a>
                <nav>
                    <span>Accueil</span>
                    <span>Exemples</span>
                    <span>langue</span>
                    <span>Contact</span>
                    <span>Se connecter</span>
                </nav>
            </div>
        </header>
    )
}