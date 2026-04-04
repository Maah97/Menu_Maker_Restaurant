import { useFormik } from 'formik'
import * as Yup from "yup"
import logo from '../assets/logo.png'
import logoGoogle from '../assets/logoGoogle.svg'

interface LoginFormValues {
  email: string;
  password: string;
}
interface SignUpFormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

export default function LoginPage() {
    const emailregExp = new RegExp("[a-z0-9._-]+@[a-z]+\\.[a-z]+$")
    const passwordPresenceChiffre = new RegExp("[0-9]{1}")
    const passwordPresenceMinuscule = new RegExp("[a-z]{1}")
    const passwordPresenceMajuscule = new RegExp("[A-Z]{1}")
    const passwordAbsenceCaractereSpeciaux = new RegExp("[\\ \\+\\\\%\\*\\#\\~\\)\\(\\ù\\=\\.\\;\\§\\£\\µ\\²\\ç\\/\\°\\<\\>\\`\\'\\\"\\^\\¨\\||\\{\\}\\[\\]\\?\\:\\,\\à\\è\\é\\ù]")
    const formikLogin = useFormik<LoginFormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Votre email est requis"),
            password: Yup.string()
                .required("Votre mot de passe est requis")
        }),
        onSubmit: (values) => {
            console.log("Form data:", values);
        },
    })
    const formikSignUp = useFormik<SignUpFormValues>({
        initialValues: {
            email: "",
            password: "",
            repeatPassword: "",
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .required("Votre email est requis")
                .matches(emailregExp, "Votre email doit être au format mmaj24oado@iyad.emz"),
            password: Yup.string()
                .required("Votre mot de passe est requis")
                .min(8, "Votre mot de passe doit contenir au moins 8 caractères")
                .matches(passwordPresenceChiffre, "Votre mot de passe doit contenir au moins un chiffre")
                .matches(passwordPresenceMinuscule, "Votre mot de passe doit contenir au moins une lettre minuscule")
                .matches(passwordPresenceMajuscule, "Votre mot de passe doit contenir au moins une lettre majuscule")
                .matches(passwordAbsenceCaractereSpeciaux, "Votre mot de passe ne doit pas contenir de caractères spéciaux"),
            repeatPassword: Yup.string()
                .required("Veuillez répéter votre mot de passe")
                .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas"),
        }),
        onSubmit: (values) => {
            console.log("Form data:", values);
        },
    })

    function displayInputsElements() {
        const inputEmailLogin = document.querySelector('.input-email-login') as HTMLElement;
        const btnProchain = document.querySelector('.btn-prochain') as HTMLElement;
        const txtIdentificationMail = document.querySelector('.txt-identification-mail') as HTMLElement;
        inputEmailLogin.style.display = "block";
        btnProchain.style.display = "block";
        txtIdentificationMail.style.display = "none";
    }

    function displayInputPasswordLogin() {
        const btnProchain = document.querySelector('.btn-prochain') as HTMLElement;
        const inputPasswordLogin = document.querySelector('.input-password-login') as HTMLElement;
        const txtBtnMotDePasseOublie = document.querySelector('.txt-btn-mot-de-passe-oublie') as HTMLElement;
        const btnIdentification = document.querySelector('.btn-identification') as HTMLElement;
        btnProchain.style.display = "none";
        inputPasswordLogin.style.display = "block";
        txtBtnMotDePasseOublie.style.display = "block";
        btnIdentification.style.display = "block";
    }

    return (
        <section className="login-page">
            <div className="container-login-page">
                <div className="bloc-1">
                    <div className="title-et-logo">
                        <img className='logo' src={logo} alt="logo Menu Maker" />
                        <h2 className='title'>MenuMaker</h2>
                    </div>
                    <div className="btn-connexion-google">
                        <div className="logo-google">
                            <img className='img-google' src={logoGoogle} alt="Logo Google" />
                        </div>
                        <p className='txt-connexion-google'>Se connecter avec Google</p>
                    </div>
                    <div className="separateur">
                        <div className="ligne-1"></div>
                        <p className='txt-separateur'>OU</p>
                        <div className="ligne-2"></div>
                    </div>
                    <p className="txt-identification-mail" onClick={displayInputsElements}>S'identifier en utilisant un e-mail</p>
                    <form className='form-login' onSubmit={formikLogin.handleSubmit}>
                        <div className='input-email-login'>
                            <div className="input-group">
                                <input type="text" name="email" value={formikLogin.values.email} onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} placeholder=" "  />
                                <label htmlFor="email">Courriel</label>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            {formikLogin.touched.email && formikLogin.errors.email && (
                                <div className='msg-error'>
                                    <i className="fa-solid fa-circle-exclamation"></i>&nbsp;
                                    {formikLogin.errors.email}
                                </div>
                            )}
                        </div>
                        <button onClick={displayInputPasswordLogin} className='btn-prochain'>PROCHAIN</button>
                        <div className='input-password-login'>
                            <div className="input-group">
                                <input type="text" name="password" value={formikLogin.values.password} onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} placeholder=" "  />
                                <label htmlFor="password">Mot de passe</label>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            {formikLogin.touched.password && formikLogin.errors.password && (
                                <div className='msg-error msg-error-password-login'>
                                    <i className="fa-solid fa-circle-exclamation"></i>&nbsp;
                                    {formikLogin.errors.password}
                                </div>
                            )}
                        </div>
                        <p className='txt-btn-mot-de-passe-oublie'>Mot de passe oublié ?</p>
                        <button className='btn-identification'>S'IDENTIFIER</button>
                    </form>
                    <p className='txt-inscription'>Vous n'avez pas de compte ?&nbsp;  <span>S'inscrire</span></p>
                </div>
                <div className="bloc-2">
                    <h2 className='txt-title-bloc-2'>Connectez vous à <span>MenuMaker</span></h2>
                    <img className='logo-bloc-2' src={logo} alt="Logo Menu Maker" />
                </div>
            </div>
        </section>
    )
}