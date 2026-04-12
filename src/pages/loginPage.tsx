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
            const passwordPresenceChiffre = new RegExp("[0-9]{1}")
            const passwordNbrDeCaracteres = new RegExp("^.{8,50}$")
            const passwordPresenceMajuscule = new RegExp("[A-Z]{1}")
            const passwordAbsenceCaractereSpeciaux = new RegExp("^(?=.*[^a-zA-Z0-9\\ ]).+$")
            const emailregExp = new RegExp("[a-z0-9._-]+@[a-z]+\\.[a-z]+$")
            const inputEmailLogin = document.querySelector('#input-email-login') as HTMLInputElement;
            const msgErrorLogin = document.querySelector('.msg-error-login') as HTMLElement;
            const txtmsgErrorLogin = document.querySelector('.txt-msg-error-login') as HTMLElement;
            const spanMsgErrorLogin = document.querySelector('.span-msg-error-login') as HTMLElement;
            const msgErrorSignUp = document.querySelector('.msg-error-sign-up') as HTMLElement;
            if (isLoginPage) {
                if (inputEmailLogin.disabled === false) {
                    if (values.email === "mahmoudouaboul@gmail.com") {
                        inputEmailLogin.value = values.email;
                        inputEmailLogin.disabled = true;
                        msgErrorLogin.style.display = "none";
                        displayInputPasswordLogin();
                    } else {
                        msgErrorLogin.style.display = "flex";
                        txtmsgErrorLogin.textContent = "Aucun compte trouvé avec cet e-mail.";
                        spanMsgErrorLogin.textContent = "S'inscrire";
                    }
                } else {
                    if (values.password === "") {
                        msgErrorLogin.style.display = "flex";
                        txtmsgErrorLogin.textContent = "Votre mot de passe est requis";
                        spanMsgErrorLogin.textContent = "";
                    } else if (values.password !== "MaahTech2026") {
                        msgErrorLogin.style.display = "flex";
                        txtmsgErrorLogin.textContent = "Votre mot de passe est incorrect";
                        spanMsgErrorLogin.textContent = "";
                    } else {
                        console.log("Connexion reussie");
                    }  
                }
            } else {
                if (values.email === "" || values.password === "" || values.repeatPassword === "") {
                    msgErrorLogin.style.display = "flex";
                    txtmsgErrorLogin.textContent = "Tous les champs sont obligatoires";
                    spanMsgErrorLogin.textContent = "";
                    msgErrorSignUp.style.display = "none";
                } else {
                    if (!emailregExp.test(values.email)) {
                        msgErrorLogin.style.display = "flex";
                        txtmsgErrorLogin.textContent = "Votre e-mail doit etre au format : restaut@menumaker.com";
                        spanMsgErrorLogin.textContent = "";
                    } else {
                        msgErrorLogin.style.display = "none";
                    }
                    if (!passwordAbsenceCaractereSpeciaux.test(values.password) || !passwordPresenceChiffre.test(values.password) || !passwordNbrDeCaracteres.test(values.password) || !passwordPresenceMajuscule.test(values.password)) {
                        msgErrorSignUp.style.display = "flex";
                    } else {
                        if (values.password !== values.repeatPassword) {
                            msgErrorLogin.style.display = "flex";
                            txtmsgErrorLogin.textContent = "Les mots de passe ne correspondent pas";
                            spanMsgErrorLogin.textContent = "";
                        } else {
                            msgErrorSignUp.style.display = "none";
                        }
                    } 
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
        const bloc1 = document.querySelector('.bloc-1') as HTMLElement;
        const bloc2 = document.querySelector('.bloc-2') as HTMLElement
        const txtIdentificationMail = document.querySelector('.txt-identification-mail') as HTMLElement;
        const inputPasswordLoginElement = document.querySelector('.input-password-login') as HTMLElement;
        const btnSubmit = document.querySelector('.btn-submit') as HTMLElement;
        const inputRepeatPasswordLoginElement = document.querySelector('.input-repeat-password-login') as HTMLElement;
        const msgErrorLogin = document.querySelector('.msg-error-login') as HTMLElement;
        const msgErrorSignUp = document.querySelector('.msg-error-sign-up') as HTMLElement;
        const inputEmailLogin = document.querySelector('#input-email-login') as HTMLInputElement;
        if (txtIdentificationMail.style.display === "none") {
            if (!isLoginPage) {
                btnSubmit.textContent = "PROCHAIN";
                inputRepeatPasswordLoginElement.style.display = "none";
                inputPasswordLoginElement.style.display = "none";
                msgErrorLogin.style.display = "none";
                msgErrorSignUp.style.display = "none";
            } else {
                inputPasswordLoginElement.style.display = "block";
                inputRepeatPasswordLoginElement.style.display = "block";
                btnSubmit.textContent = "S'INSCRIRE";
                msgErrorLogin.style.display = "none";
                msgErrorSignUp.style.display = "none";
                inputEmailLogin.disabled = false;
            }
        }
        if (!isLoginPage) {
            bloc1.style.transform = "translateX(0%)";
            bloc2.style.transform = "translateX(0%)";
        } else {
            bloc1.style.transform = "translateX(51.51515151%)";
            bloc2.style.transform = "translateX(-194.11764705882%)";
            
        }
    }

    useEffect(() => {
        const passwordPresenceChiffre = new RegExp("[0-9]{1}")
        const passwordNbrDeCaracteres = new RegExp("^.{8,50}$")
        const passwordPresenceMajuscule = new RegExp("[A-Z]{1}")
        const passwordAbsenceCaractereSpeciaux = new RegExp("^(?=.*[^a-zA-Z0-9\\ ]).+$")
        const emailregExp = new RegExp("[a-z0-9._-]+@[a-z]+\\.[a-z]+$")
        const msgErrorLogin = document.querySelector('.msg-error-login') as HTMLElement;
        const msgErrorSignUp = document.querySelector('.msg-error-sign-up') as HTMLElement;
        const msgError1 = document.querySelector('.error-nbr-caractere-password') as HTMLElement;
        const msgError2 = document.querySelector('.error-nbr-de-chiffre-password') as HTMLElement;
        const msgError3 = document.querySelector('.error-nbr-de-lettre-password') as HTMLElement;
        const msgError4 = document.querySelector('.error-nbr-caractere-special-password') as HTMLElement;
        const inputEmailLogin = document.querySelector('#input-email-login') as HTMLInputElement;
        const inputPasswordLogin = document.querySelector('#input-password-login') as HTMLInputElement;
        const txtmsgErrorLogin = document.querySelector('.txt-msg-error-login') as HTMLElement;
        const spanMsgErrorLogin = document.querySelector('.span-msg-error-login') as HTMLElement;
        inputEmailLogin.addEventListener('focus', () => {
            msgErrorLogin.style.display = "none";
        })
        inputEmailLogin.addEventListener('input', () => {
            msgErrorSignUp.style.display = "none";
            if (emailregExp.test(inputEmailLogin.value)) {
                msgErrorLogin.style.display = "none";
            } else {
                msgErrorLogin.style.display = "flex";
                txtmsgErrorLogin.textContent = "Votre e-mail doit etre au format : restaut@menumaker.com";
                spanMsgErrorLogin.textContent = "";
            }
        })
        inputPasswordLogin.addEventListener('focus', () => {
            msgErrorLogin.style.display = "none";
            console.log(inputPasswordLogin.value);
        });
        inputPasswordLogin.addEventListener('input', () => {
            msgErrorLogin.style.display = "none";
            if (isLoginPage) {
                msgErrorSignUp.style.display = "none";
            } else {
                if (passwordNbrDeCaracteres.test(inputPasswordLogin.value) && passwordPresenceChiffre.test(inputPasswordLogin.value) && passwordPresenceMajuscule.test(inputPasswordLogin.value) && passwordAbsenceCaractereSpeciaux.test(inputPasswordLogin.value)) {
                    msgErrorSignUp.style.display = "none";
                } else {
                    msgErrorSignUp.style.display = "flex";
                    if (passwordNbrDeCaracteres.test(inputPasswordLogin.value)) {
                        msgError1.classList.add("valid")
                    } else {
                        msgError1.classList.remove("valid")
                    }
                    if (passwordPresenceChiffre.test(inputPasswordLogin.value)) {
                        msgError2.classList.add("valid")
                    } else {
                        msgError2.classList.remove("valid")
                    }
                    if (passwordPresenceMajuscule.test(inputPasswordLogin.value)) {
                        msgError3.classList.add("valid")
                    } else {
                        msgError3.classList.remove("valid")
                    }
                    if (passwordAbsenceCaractereSpeciaux.test(inputPasswordLogin.value)) {
                        msgError4.classList.add("valid")
                    } else {
                        msgError4.classList.remove("valid")
                    }
                }
            }
        })
    }, [isLoginPage])

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
                            <p className='txt-msg-error-login'></p>
                            <span className='span-msg-error-login' onClick={switchLoginAndSignUpPage}></span>
                        </div>
                        <div className="msg-error msg-error-sign-up">
                            <p className='error-nbr-caractere-password'><i className="fa-solid fa-circle-exclamation"></i>&nbsp;Mot de passe doit être d'au moins 8 - 50 caractères</p>
                            <p className='error-nbr-de-chiffre-password'><i className="fa-solid fa-circle-exclamation"></i>&nbsp;Le mot de passe doit contenir au moins 1 chiffre</p>
                            <p className='error-nbr-de-lettre-password'><i className="fa-solid fa-circle-exclamation"></i>&nbsp;Le mot de passe doit contenir au moins 1 lettre majuscule</p>
                            <p className='error-nbr-caractere-special-password'><i className="fa-solid fa-circle-exclamation"></i>&nbsp;Le mot de passe doit contenir au moins 1 caractère spécial</p>
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