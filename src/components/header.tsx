import logo from '../assets/logo.png'
import menuHamburger from '../assets/menu-hamburger.svg'

export default function Header() {
    function toggleClass() {
        const nav = document.querySelector('nav') as HTMLElement;
        nav.classList.toggle('active');
        document.addEventListener('click', (e: Event) => {
            const menuHamburger = document.querySelector('.menu-hamburger') as HTMLElement;
            const isClickedInsideMenuHamburger = menuHamburger.contains(e.target as Node) || false ;
            const isClickedInsideMenu = nav.contains(e.target as Node) || false ;
            if (!isClickedInsideMenuHamburger && !isClickedInsideMenu) {
                nav.classList.remove('active');
            }
        });
    }
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
                <div className="menu-hamburger" onClick={toggleClass}>
                    <img src={menuHamburger} alt="Image Menu Hamburger" />
                </div>
            </div>
        </header>
    )
}