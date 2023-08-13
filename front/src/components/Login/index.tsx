import React from 'react';
import { Link } from 'react-router-dom'
import css from "./index.module.css"

import { useState } from 'react';


const Login: React.FC = () => {
    const [autorize, setAutorize] = useState(false)
    const [loginBoolen, setLoginBoolen] = useState(false)
    const [passwordBoolen, setPasswordBoolen] = useState(false)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    // const navigate = useNavigate();
    // const dispatch = useAppDispatch();



    const onChangeLogin = (e: React.FormEvent<HTMLInputElement>) => {

        var a: boolean
        if (e.currentTarget.value.startsWith("+")) {
            var patt = new RegExp(
                '^' +                           // No leading content.
                '[-+]?' +                       // Optional sign.
                '(?:[0-9]{0,30}\\.)?' +         // Optionally 0-30 decimal digits of mantissa.
                '[0-9]{1,30}' +                 // 1-30 decimal digits of integer or fraction.
                '(?:[Ee][-+]?[1-2]?[0-9])?' +   // Optional exponent 0-29 for scientific notation.
                '$'                             // No trailing content.
            )
            a = patt.test(e.currentTarget.value)
            setLoginBoolen(a)
            if (a) {
                setLogin(e.currentTarget.value)
            }
        } else if (e.currentTarget.value === "") {
            setLoginBoolen(false)
        } else {
            setLoginBoolen(true)
            setLogin(e.currentTarget.value)
        }

    }
    const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {

        if (e.currentTarget.value === "") {
            setPasswordBoolen(false)
        } else {
            setPasswordBoolen(true)
            setPassword(e.currentTarget.value)
        }
    }

    const onClick = () => {
        console.log("dsada")
        if (loginBoolen !== false && passwordBoolen !== false) {
            // postGetToken()
        }
    }

    return (
        <section className={css.login_flex}>
            <h1 className={css.login_h1}>Для начала работы с сервисом, необходимо зарегестрироваться или войти.</h1>
            <div className={css.loginBlock}>
                <div className={css.loginMenu}>
                    <div className={css.flex_block}>
                        <div>
                            <h4 className={css.logInText}>
                                Войти
                            </h4>
                            <div className={css.loginLine}>

                            </div>
                        </div>
                        <div className={css.loginMenu}>
                            <h4 className={css.registrMenuText}>
                                Зарегистрироваться
                            </h4>
                            <div className={css.registrLine}>

                            </div>
                        </div>

                    </div>
                    <p className={css.textLoginBox} style={{ marginTop: "40px" }}>Логин или номер телефона:</p>

                    <input type="text" className={loginBoolen ? css.input : css.inputErr} onChange={onChangeLogin} />

                    {loginBoolen ? null : (<p className={css.textErr}>Введите корректные данные</p>)}

                    <p className={css.textLoginBox} style={{ marginTop: "40px" }}>Пароль:</p>
                    <input type="password" className={passwordBoolen ? css.input : css.inputErr} onChange={onChangePassword} />

                    {passwordBoolen ? null : (<p className={css.textErr}>Неправильный пароль</p>)}


                    {loginBoolen ? (passwordBoolen ? <button className={css.buttonLogInValidTrue} onClick={onClick} style={{ marginTop: "40px" }}>Войти</button>
                        : <button className={css.buttonLogIn} style={{ marginTop: "40px" }}>Войти</button>) : <button className={css.buttonLogIn} style={{ marginTop: "40px" }} >Войти</button>
                    }




                </div>
            </div>
        </section>
    )
}


export default Login;