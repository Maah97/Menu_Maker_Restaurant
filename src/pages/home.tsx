import { useFormik } from 'formik'
import * as Yup from "yup";
import imgMenu from '../assets/img_menu.webp'
import imgPersonnalisationMenu1 from '../assets/image_homme_tenant_un_menu.webp'
import imgPersonnalisationMenu2 from '../assets/image_montrant_la_façade_d_un_restaurant.webp'
import imgWhyMenuMaker from '../assets/img_why_menu_maker.webp'

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function Home() {
    const emailregExp = new RegExp("[a-z0-9._-]+@[a-z]+\\.[a-z]+$")
    const formik = useFormik<ContactFormValues>({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required("Votre nom est requis")
                .min(3, "Minimum 3 caractères"),
            email: Yup.string()
                .required("Votre email est requis")
                .min(10, "Minimum 10 caractères")
                .matches(emailregExp, "Votre email doit être au format mmaj24oado@iyad.emz"),
            message: Yup.string()
                .required("Votre message est requis")
                .min(30, "Minimum 30 caractères"),
        }),
        onSubmit: (values) => {
            console.log("Form data:", values);
        },
    })
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
            <div className="container-why-menu-maker">
                <div className="why-menu-maker">
                    <div className="img-why-menu-maker">
                        <img src={imgWhyMenuMaker} alt="Icone de representation d'un menu" />
                    </div>
                    <div className="txt-why-menu-maker">
                        <h2>Pourquoi Menu Maker de MAAH_TECH ?</h2>
                        <div className="bloc">
                            <div className="lineaire-gradiant"></div>
                            <div className="txt-bloc">
                                <h3>Votre Menu est notre priorité</h3>
                                <p>Votre menu est la première impression que vos clients ont de votre cuisine. Menu Maker vous permet de créer une carte claire, moderne et professionnelle, sans compétences techniques. Chaque détail est pensé pour valoriser vos plats et renforcer votre image de marque.</p>
                            </div>
                        </div>
                        <div className="bloc">
                            <div className="lineaire-gradiant"></div>
                            <div className="txt-bloc">
                                <h3>Une solution pensée pour le digital</h3>
                                <p>Créez votre menu une seule fois et diffusez-le partout : site web, réseaux sociaux, QR code ou messagerie. Grâce à Menu Maker, vos menus sont toujours à jour, accessibles sur tous les appareils et faciles à partager.</p>
                            </div>
                        </div>
                        <div className="bloc">
                            <div className="lineaire-gradiant"></div>
                            <div className="txt-bloc">
                                <h3>Simplicité, rapidité et impact</h3>
                                <p>Gagnez du temps tout en offrant une expérience moderne à vos clients. Modifiez votre menu à tout moment, adaptez-le à vos offres et laissez Menu Maker s’occuper du reste.</p>
                            </div>
                        </div>
                        <button className='btn-creer-un-menu'>Créer un menu</button>
                    </div>
                </div>
            </div>
            <div className="container-how-to-create-your-menu-maker">
                <div className="how-to-create-your-menu-maker">
                    <h2>Comment créer votre menu avec Menu Maker ?</h2>
                    <p>Réalisez votre menu en seulement trois étapes</p>
                    <div className="bloc-steps">
                        <div className="container-steps">
                            <div className='steps'>
                                <div className="point-and-step-number">
                                    <div className="point"></div>
                                    <p>1</p>
                                </div>
                                <p>Listez l’ensemble de vos boissons, entrées, plats, desserts, accompagnements... à afficher sur votre menu.</p>
                            </div>
                        </div>
                        <div className="container-steps">
                            <div className='steps'>
                                <div className="point-and-step-number">
                                    <div className="point"></div>
                                    <p>2</p>
                                </div>
                                <p>Choisissez le style qui correspond à votre restaurant (logo, couleurs, typos).</p>
                            </div>
                        </div>
                        <div className="container-steps">
                            <div className='steps'>
                                <div className="point-and-step-number">
                                    <div className="point"></div>
                                    <p>3</p>
                                </div>
                                <p>Enregistrez votre menu en PDF et diffusez-le sur vos plateformes de vente en ligne.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-contact">
                <div className="contact">
                    <div className="txt-contact">
                        <h2>Besoin d'informations ?</h2>
                        <p>Contactez-nous ! notre équipe vous repond rapidement</p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="form-contact">
                        <div className="bloc-label-input">
                            <label htmlFor="name">Nom</label>
                            <input type="text" name="name"  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.name && formik.errors.name && (
                                <div className='contact-msg-error'>
                                    {formik.errors.name}
                                </div>
                            )}
                        </div>
                        <div className="bloc-label-input">
                            <label htmlFor="email">Email</label>
                            <input type='text'  name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email && (
                                <div className='contact-msg-error'>
                                    {formik.errors.email}
                                </div>
                            )}
                        </div>
                        <div className="bloc-label-input">

                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
                            {formik.touched.message && formik.errors.message && (
                                <div className='contact-msg-error'>
                                    {formik.errors.message}
                                </div>
                            )}
                        </div>
                        <button className='envoyer-le-message' type='submit'>Envoyer le message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}