import React from 'react';
import { Link } from 'react-router-dom'
import css from "./index.module.css"

import { useState } from 'react';


interface EventFiltersInfo {

}

const Home: React.FC = () => {

    return (
        <div>
            <div className={css.section_block}>
                <section className={css.promo}>
                    <div>
                        <p className={css.promo_elips}></p>

                        <h1 className={css.promo_h1}>
                            Оценивайте кандидатов быстро, легко и уверенно.
                        </h1>
                        <p className={css.promo_p}>
                            Информация о причинах блокировки была выслана на Ваш контактный E-mail.Также Вы можете связаться с нашей службой технической поддержки с помощью раздела "Помощь и поддержка" в панели управления хостингом или любым удобным для Вас способом.
                        </p>
                    </div>
                    <div className={css.promo_pic}>

                    </div>

                </section>
            </div>

            <section className={css.promo_white}>
                <div className={css.promo_white_flex}>
                    <h1 className={css.promo_white_h1}>
                        Собеседуйся эффективно с нашей помощью и бла бла бла бла.
                    </h1>
                    <div className={css.promo_white_pic}></div>
                </div>
            </section>
        </div>
    )
}


export default Home;
