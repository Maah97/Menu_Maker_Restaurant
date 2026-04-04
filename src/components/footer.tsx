import imgX from '../assets/square-x-twitter-brands-solid-full.svg'

export default function Footer() {
    return (
        <footer>
            <div className="bloc1">
                <div className="sous-bloc1-txt">
                    <div className="bloc-txt">
                        <a href='http://localhost:5173/' className="txt">Accueil</a>
                        <a className="txt">Nous contacter</a>
                    </div>
                    <div className="bloc-txt">
                        <a className="txt">Comment ça marche</a>
                        <a className="txt">Politique de confidentialité</a>
                    </div>
                    <div className="bloc-txt">
                        <a className="txt">Notre mission</a>
                        <a className="txt">Exemples de menus</a>
                    </div>
                </div>
                <div className="sous-bloc1-btn">
                    <button className="btn-footer-contact-us">Contact us</button>
                    <div className="select-langage">
                        <i className="fa-solid fa-globe"></i>
                        <select className='select-lang-footer' name="langage" id="langage">
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="bloc2">
                <div className="sous-bloc2-txt1">
                    <i className="fa-regular fa-copyright"></i>&nbsp;{new Date().getFullYear()} -  Menu Maker by MAAH_TECH - All rights reserved.
                </div>
                <div className="sous-bloc2-icones">
                    <a className="icone">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a className="icone">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a className="icone">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a className="icone">
                        <img className='image-X-twitter' src={imgX} alt="X (Twitter) icon" />
                    </a>
                    <a className="icone">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </div>
                <div className="sous-bloc2-txt2">
                    <a>Conditions d'utilisations</a>
                    <a>Politique de confidentialité</a>
                    <a>Cookies</a>
                    <a>Sitemap</a>
                </div>
            </div>
        </footer>
    )
}