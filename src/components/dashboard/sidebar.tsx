import logo from "../../assets/logo.png"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-title">
                <img src={logo} alt="logo entreprise" />
                <h1>MenuMaker</h1>
            </div>
            <nav className="navigation-dashboard">
                <a>Tableau de bord</a>
                <a>Mes Menus</a>
                <a>Mon Restaurant</a>
                <a>Mon compte</a>
                <a>Paramètres</a>
            </nav>
            <div className="ligne-de-separation"></div>
            <div className="footer-sidebar">
                <a>Se déconnecter</a>
                <a>Mentions légales</a>
                <a>Tous droits réservés</a>
            </div>
        </div>
    )
}