import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Header } from '../Pages/shared/Header/Header';


const Main = () => {
    const {theme} = useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            <div className={theme ? 'bg-white' : 'dark:bg-black'}>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;