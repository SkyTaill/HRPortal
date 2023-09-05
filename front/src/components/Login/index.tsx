import React from 'react';
import { Link } from 'react-router-dom'
import css from "./index.module.css"

import { useState } from 'react';


const Login: React.FC = () => {
    // const [autorize, setAutorize] = useState(false)
    // const [loginBoolen, setLoginBoolen] = useState(false)
    // const [passwordBoolen, setPasswordBoolen] = useState(false)

    const [blockMenuLogin, setBlockMenuLogin] = useState(true)
    // const navigate = useNavigate();
    // const dispatch = useAppDispatch();


    const onClickLogin = () => {
        setBlockMenuLogin(true)
    }

    const onClickRegistry = () => {
        setBlockMenuLogin(false)
    }


    return (
        <section className={css.login_flex}>
            <h1 className={css.login_h1}>Для начала работы с сервисом, необходимо зарегестрироваться или войти.</h1>
            <div className={css.loginBlock}>
                <div className={css.loginMenu}>
                    <div className={css.flex_block}>
                        <div>
                            <button className={blockMenuLogin ? css.logInText : css.NoLogInText} onClick={onClickLogin}>
                                Войти
                            </button>
                            <div className={blockMenuLogin ? css.loginLine : css.NoLoginLine}>
                            </div>

                        </div>
                        <div className={css.loginMenu}>
                            <button className={blockMenuLogin ? css.NoRegistrMenuText : css.registrMenuText} onClick={onClickRegistry}>
                                Зарегистрироваться
                            </button>
                            <div className={blockMenuLogin ? css.NoRegistrLine : css.registrLine}>

                            </div>
                        </div>

                    </div>

                    {blockMenuLogin ? <LoginBlock /> : <Registry />}


                </div>
            </div>
        </section>
    )

}

const Registry: React.FC = () => {
    const [loginBoolen, setLoginBoolen] = useState(true)
    const [passwordBoolen, setPasswordBoolen] = useState(false)
    const [passwordQRBoolen, setPasswordQRBoolen] = useState(false)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [qrPassword, setQrPassword] = useState("")

    // const onChangeLogin = (e: React.FormEvent<HTMLInputElement>) => {
    //     var a: boolean
    //     if (e.currentTarget.value !== "") {
    //         var patt = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //         a = patt.test(e.currentTarget.value)
    //         setLoginBoolen(a)
    //         if (a) {
    //             setLogin(e.currentTarget.value)
    //         }
    //     } else if (e.currentTarget.value === "") {
    //         setLoginBoolen(false)
    //     } else {
    //         setLoginBoolen(true)
    //         setLogin(e.currentTarget.value)
    //     }

    // }

    const onChangeQRPass = (e: React.FormEvent<HTMLInputElement>) => {

        setQrPassword(e.currentTarget.value)

        if (e.currentTarget.value !== "" && e.currentTarget.value == password) {

            setPasswordQRBoolen(true)
            setPasswordBoolen(true)
        }
        else {
            setPasswordQRBoolen(false)
            setPasswordBoolen(false)
        }

    }

    const onChangePass = (e: React.FormEvent<HTMLInputElement>) => {

        setPassword(e.currentTarget.value)
        if (e.currentTarget.value !== "" && e.currentTarget.value == qrPassword) {

            setPasswordQRBoolen(true)
            setPasswordBoolen(true)
        }
        else {
            setPasswordQRBoolen(false)
            setPasswordBoolen(false)
        }

    }

    const onClick = () => {
        console.log("dsada")
        // if (loginBoolen !== false && passwordBoolen !== false) {
        //     // postGetToken()
        // }
    }

    return (
        <div>
            <p className={css.textLoginBox} style={{ marginTop: "20px" }}>Почта:</p>

            <input type="text" className={loginBoolen ? css.input : css.inputErr} />

            <p className={css.textLoginBox} style={{ marginTop: "20px" }}>Индивидуальный код:</p>

            <input type="text" className={passwordQRBoolen ? css.input : css.inputErr} onChange={onChangeQRPass} />

            <p className={css.textLoginBox} style={{ marginTop: "20px" }}>Пароль:</p>

            <input type="text" className={passwordBoolen ? css.input : css.inputErr} onChange={onChangePass} />

            {loginBoolen ? (passwordBoolen ? <button className={css.buttonLogInValidTrue} onClick={onClick} style={{ marginTop: "20px" }}>Войти</button>
                : <button className={css.buttonLogIn} style={{ marginTop: "20px" }}>Войти</button>) : <button className={css.buttonLogIn} style={{ marginTop: "20px" }} >Зарегестрироваться</button>
            }
        </div>
    )

}

const LoginBlock: React.FC = () => {
    const [loginBoolen, setLoginBoolen] = useState(true)
    const [passwordBoolen, setPasswordBoolen] = useState(false)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")


    // const onChangeLogin = (e: React.FormEvent<HTMLInputElement>) => {
    //     var a: boolean
    //     if (e.currentTarget.value !== "") {
    //         var patt = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //         a = patt.test(e.currentTarget.value)
    //         setLoginBoolen(a)
    //         if (a) {
    //             setLogin(e.currentTarget.value)
    //         }
    //     } else if (e.currentTarget.value === "") {
    //         setLoginBoolen(false)
    //     } else {
    //         setLoginBoolen(true)
    //         setLogin(e.currentTarget.value)
    //     }

    // }
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
        // if (loginBoolen !== false && passwordBoolen !== false) {
        //     // postGetToken()
        // }
    }
    return (
        <div>
            <div className={css.loginMargin}>
                <p className={css.textLoginBox} style={{ marginTop: "40px" }}>Почта:</p>

                <input type="text" className={loginBoolen ? css.input : css.inputErr} />

                {loginBoolen ? null : (<p className={css.textErr}>Введите корректные данные</p>)}

                <p className={css.textLoginBox} style={{ marginTop: "40px" }}>Пароль:</p>
                <input type="password" className={passwordBoolen ? css.input : css.inputErr} onChange={onChangePassword} />

                {passwordBoolen ? null : (<p className={css.textErr}>Введите корректные данные</p>)}
            </div>
            {loginBoolen ? (passwordBoolen ? <button className={css.buttonLogInValidTrue} onClick={onClick} style={{ marginTop: "40px" }}>Войти</button>
                : <button className={css.buttonLogIn} style={{ marginTop: "40px" }}>Войти</button>) : <button className={css.buttonLogIn} style={{ marginTop: "40px" }} >Войти</button>
            }
        </div>
    )
}



export default Login;
