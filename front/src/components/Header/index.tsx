import React from 'react';
import { Link } from 'react-router-dom'
import css from "./index.module.css"

import { useState } from 'react';


interface EventFiltersInfo {

}

const Header: React.FC = () => {

    //const [infoUser, setInfoUser] = useState<EventFiltersInfo>();
    //needUpdate -false и isLoading -false значит мы уже собрали статистику и всю инфу отображаем в хеадер
    const [needUpdate, setNeedUpdate] = useState(true);
    const [isLoading, setIsLoading] = useState(false);




    return (
        <header className={css.header}>
            <div className={css.header_content}>
                <div className={css.scan}></div>
                <div className={css.menu}>
                    <Link to={`/`} >
                        <button className={css.menu_item_l}>Главная</button>
                    </Link>
                    <button className={css.menu_item}>Документация</button>
                    <button className={css.menu_item}>FAQ</button>
                </div>

                <LoadStat />
                <Profil />

            </div>
        </header>
    );

    function LoadStat() {
        if (isLoading) {
            return (
                <div className={css.loader}>
                </div>
            )
        } else if (isLoading === false && needUpdate === false) {
            return (
                <div className={css.infoBlockMargin}>
                    <div className={css.flex}>
                        <p className={css.textUser}>Использовано компаний</p>
                        <p className={css.textNumber}>{"tt"}</p>
                    </div>
                    <div className={css.flexlimitComponent}>
                        <p className={css.textUser}>Лимит по компаниям</p>
                        <p className={css.textNumberGreen}>{"tt"}</p>
                    </div>
                </div>
            )
        }
        return (
            <div className={css.NLoader}>
            </div>
        )
    }
    function Profil() {
        if (isLoading === false && needUpdate === false) {
            return (
                <div className={css.flex}>
                    <div className={css.blockProfil}>
                        <p className={css.userTextProfil}>User</p>
                        <p className={css.textUser}>выйти</p>
                    </div>
                    <div className={css.userIcon}></div>
                </div>
            )
        } else {
            return (
                <div className={css.loginOrRegistrate}>
                    <div className={css.registate}>Зарегистрироваться</div>
                    <div className={css.line}></div>
                    <Link to={`/login`} >
                        <button className={css.button_login}>Войти</button>
                    </Link>
                </div>
            )
        }
    }
}


export default Header;
