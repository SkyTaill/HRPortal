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
                    <h1 className={css.promo_h1}>
                        Оценивайте кандидатов быстро, легко и уверенно.
                    </h1>
                </section>
            </div>

            <section className={css.promoWithMan_section_block}>

            </section>
        </div>
    )
}


export default Home;
