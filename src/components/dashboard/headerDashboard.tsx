import imgProfil from '../../assets/exemple-photo-profil.png'

export default function HeaderDashboard() {
    return (
        <div className="header-dashboard">
            <div className="img-user-profil">
                <img src={imgProfil} alt="Image of the user profil" />
            </div>
            <div className="welcome-and-name-profil">
                <p>Bienvenue,</p>
                <p>FoodAfrika</p>
            </div>
        </div>
    )
}