import React from 'react';
import css from "./index.module.css"
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';

function Main() {

    return (
        <main className={css.main}>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </main>
    )
}




export default Main;
