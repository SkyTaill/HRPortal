import React from 'react';
import css from "./index.module.css"
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';

function Main() {

    return (
        <main className={css.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    )
}




export default Main;
