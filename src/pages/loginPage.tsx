import { useFormik } from 'formik'
import * as Yup from "yup"
import logo from '../assets/logo.png'
import logoGoogle from '../assets/logoGoogle.svg'
import { useEffect, useState } from 'react';

interface LoginFormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

export default function LoginPage() {
    // const emailregExp = new RegExp("[a-z0-9._-]+@[a-z]+\\.[a-z]+$")
    // const passwordPresenceChiffre = new RegExp("[0-9]{1}")
    // const passwordPresenceMinuscule = new RegExp("[a-z]{1}")
    // const passwordPresenceMajuscule = new RegExp("[A-Z]{1}")
    // const passwordAbsenceCaractereSpeciaux = new RegExp("[\\ \\+\\\\%\\*\\#\\~\\)\\(\\ù\\=\\.\\;\\§\\£\\µ\\²\\ç\\/\\°\\<\\>\\`\\'\\\"\\^\\¨\\||\\{\\}\\[\\]\\?\\:\\,\\à\\è\\é\\ù]")
    const [isLoginPage, setIsLoginPage] = useState(true);
    const formikLogin = useFormik<LoginFormValues>({
        initialValues: {
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Votre email est requis"),
            password: Yup.string(),
            repeatPassword: Yup.string(),
        }),
        onSubmit: (values) => {
            const inputEmailLogin = document.querySelector('#input-email-login') as HTMLInputElement;
            const msgErrorLogin = document.querySelector('.msg-error-login') as HTMLElement;
            if (inputEmailLogin.disabled === false) {
                if (values.email === "mahmoudouaboul@gmail.com") {
                    inputEmailLogin.value = values.email;
                    inputEmailLogin.disabled = true;
                    msgErrorLogin.style.display = "none";
                    displayInputPasswordLogin();
                } else {
                    msgErrorLogin.style.display = "flex";
                }
            } else {
                if (values.password === "") {
                    msgErrorLogin.style.display = "flex";
                    msgErrorLogin.textContent = "Votre mot de passe est requis";
                } else if (values.password !== "MaahTech2026") {
                    msgErrorLogin.style.display = "flex";
                    msgErrorLogin.textContent = "Votre mot de passe est incorrect";
                } else {
                    console.log("Connexion reussie");
                    
                }  
            }
        },
    })

    function displayInputsElements() {
        const inputEmailLoginElement = document.querySelector('.input-email-login') as HTMLElement;
        const btnSubmit = document.querySelector('.btn-submit') as HTMLElement;
        const txtIdentificationMail = document.querySelector('.txt-identification-mail') as HTMLElement;
        const inputPasswordLoginElement = document.querySelector('.input-password-login') as HTMLElement;
        const inputRepeatPasswordLoginElement = document.querySelector('.input-repeat-password-login') as HTMLElement;
        const msgErrorLogin = document.querySelector('.msg-error-login') as HTMLElement;
        inputEmailLoginElement.style.display = "block";
        btnSubmit.style.display = "block";
        txtIdentificationMail.style.display = "none";
        if (isLoginPage) {
            btnSubmit.textContent = "PROCHAIN";
            inputRepeatPasswordLoginElement.style.display = "none";
            inputPasswordLoginElement.style.display = "none";
        } else {
            inputPasswordLoginElement.style.display = "block";
            inputRepeatPasswordLoginElement.style.display = "block";
            btnSubmit.textContent = "S'INSCRIRE";
            msgErrorLogin.style.display = "none";
        }
    }

    function displayInputPasswordLogin() {
        const inputPasswordLoginElement = document.querySelector('.input-password-login') as HTMLElement;
        const txtBtnMotDePasseOublie = document.querySelector('.txt-btn-mot-de-passe-oublie') as HTMLElement;
        const btnSubmit = document.querySelector('.btn-submit') as HTMLElement;
        const inputRepeatPasswordLoginElement = document.querySelector('.input-repeat-password-login') as HTMLElement;
        inputPasswordLoginElement.style.display = "block";
        if (isLoginPage) {
            btnSubmit.textContent = "S'IDENTIFIER";
            txtBtnMotDePasseOublie.style.display = "block";
            inputRepeatPasswordLoginElement.style.display = "none";
        } else {
            inputRepeatPasswordLoginElement.style.display = "block";
            btnSubmit.textContent = "S'INSCRIRE";
        }
    }

    function switchLoginAndSignUpPage() {
        setIsLoginPage(!isLoginPage);
        const txtIdentificationMail = document.querySelector('.txt-identification-mail') as HTMLElement;
        const inputPasswordLoginElement = document.querySelector('.input-password-login') as HTMLElement;
        const btnSubmit = document.querySelector('.btn-submit') as HTMLElement;
        const inputRepeatPasswordLoginElement = document.querySelector('.input-repeat-password-login') as HTMLElement;
        const msgErrorLogin = document.querySelector('.msg-error-login') as HTMLElement;
        const inputEmailLogin = document.querySelector('#input-email-login') as HTMLInputElement;
        if (txtIdentificationMail.style.display === "none") {
            if (!isLoginPage) {
                btnSubmit.textContent = "PROCHAIN";
                inputRepeatPasswordLoginElement.style.display = "none";
                inputPasswordLoginElement.style.display = "none";
            } else {
                inputPasswordLoginElement.style.display = "block";
                inputRepeatPasswordLoginElement.style.display = "block";
                btnSubmit.textContent = "S'INSCRIRE";
                msgErrorLogin.style.display = "none";
                inputEmailLogin.disabled = false;
            }
        }
    }

    useEffect(() => {
        const msgErrorLogin = document.querySelector('.msg-error-login') as HTMLElement;
        const inputEmailLogin = document.querySelector('#input-email-login') as HTMLInputElement;
        const inputPasswordLogin = document.querySelector('#input-password-login') as HTMLInputElement;
        inputEmailLogin.addEventListener('focus', () => {
            msgErrorLogin.style.display = "none";
        })
        inputPasswordLogin.addEventListener('focus', () => {
            msgErrorLogin.style.display = "none";
        });
    }, [])

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
                        <p className='txt-connexion-google'>{isLoginPage ? "S'identifier avec Google" : "S'inscrire avec Google"}</p>
                    </div>
                    <div className="separateur">
                        <div className="ligne-1"></div>
                        <p className='txt-separateur'>OU</p>
                        <div className="ligne-2"></div>
                    </div>
                    <p className="txt-identification-mail" onClick={displayInputsElements}>{isLoginPage ? "S'identifier en utilisant un e-mail" : "S'inscrire en utilisant e-mail"}</p>
                    <form className='form-login' onSubmit={formikLogin.handleSubmit}>
                        <div className='input-email-login'>
                            <div className="input-group">
                                <input id='input-email-login' type="text" name="email" value={formikLogin.values.email} onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} placeholder=" "  />
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
                        <div className='input-password-login'>
                            <div className="input-group">
                                <input id='input-password-login' type="text" name="password" value={formikLogin.values.password} onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} placeholder=" "  />
                                <label htmlFor="password">Mot de passe</label>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                        </div>
                        <div className='input-repeat-password-login'>
                            <div className="input-group">
                                <input id='input-repeat-password-login' type="text" name="repeatPassword" value={formikLogin.values.repeatPassword} onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} placeholder=" "  />
                                <label htmlFor="repeatPassword">Retaper le mot de passe</label>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                        </div>
                        <div className="msg-error msg-error-login">
                            <i className="fa-solid fa-circle-exclamation"></i>&nbsp;
                            <p>Aucun compte trouvé avec cet e-mail. <span onClick={switchLoginAndSignUpPage}>S'inscrire</span></p>
                        </div>
                        <p className='txt-btn-mot-de-passe-oublie'>Mot de passe oublié ?</p>
                        <button type='submit' className='btn-submit'></button>
                    </form>
                    <div className="separateur-confidialite-et-conditions-utilisation">
                        {!isLoginPage && <p className='txt-condition-utilisation-et-confidentialite'>En vous inscrivant, vous acceptez de Menu Maker, <span>Conditions d'utilisation</span> et <span>Politique de confidentialité</span></p>}
                        <p className='txt-inscription-identification'>{isLoginPage ? "Vous n'avez pas de compte ? " : "Vous avez déjà un compte ? "} <span onClick={switchLoginAndSignUpPage} className='btn-switch-inscription-identification'>{isLoginPage ? "S'inscrire" : "S'identifier"}</span></p>
                    </div>
                </div>
                <div className="bloc-2">
                    <h2 className='txt-title-bloc-2'>Connectez vous à <span>MenuMaker</span></h2>
                    <img className='logo-bloc-2' src={logo} alt="Logo Menu Maker" />
                </div>
            </div>
        </section>
    )
}