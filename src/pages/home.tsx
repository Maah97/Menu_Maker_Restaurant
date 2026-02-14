import imgMenu from '../assets/img_menu.webp'
import imgPersonnalisationMenu1 from '../assets/image_homme_tenant_un_menu.webp'
import imgPersonnalisationMenu2 from '../assets/image_montrant_la_façade_d_un_restaurant.webp'

export default function Home() {
    return (
        <section className="home-page">
            <div className="container-presentation">
                <div className="presentation">
                    <div className="txt-presentation">
                        <h2>Créez et diffusez votre menu personnalisé en toute simplicité</h2>
                        <p>Avec Menu Maker, créez facilement un menu qui reflète l’identité unique de votre établissement. Personnalisez chaque détail, du contenu au design, puis diffusez votre menu en ligne en quelques clics. Offrez à vos clients une expérience claire, moderne et accessible sur tous les supports.</p>
                        <button className="btn-commencer">Commencer</button>
                    </div>
                    <div className="img-presentation">
                        <img src={imgMenu} alt="photo menu restaurant africain" />
                    </div>
                </div>      
            </div>
            <div className="container-personnalisation-menu">
                <div className="personnalisation-menu">
                    <div className="txt-personnalisation-menu">
                        <h2>Personnalisez votre menu</h2>
                        <p>Ajoutez vos plats, vos boissons, et organisez
                        votre menu comme le souhaitez. Pour l’impression ou la diffusion en ligne, récupérez votre menu au format que vous souhaitez et diffusez-le auprès de votre clientèle !</p>
                        <button className='lancer'>Lancer</button>
                    </div>
                    <div className="img-personnalisation-menu">
                        <img src={imgPersonnalisationMenu1} alt="Image homme tenant un menu" />
                        <img src={imgPersonnalisationMenu2} className='img1' alt="Image montrant la façade d'un restaurant" />
                    </div>
                </div>
            </div>
            <div className="container-how-to-make-menu">
                <div className="how-to-make-menu">
                    <div className="img-how-to-make-menu">
                        <img src="" alt="" />
                    </div>
                    <div className="txt-how-to-make-menu">
                        <h2>Comment créer votre menu ?</h2>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}