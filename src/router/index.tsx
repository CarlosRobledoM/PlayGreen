import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { userContext } from '../context/AuthContext';
import BottomNavBar from '../components/BottonNavBar';
import History from '../views/history';
import Home from '../views/home';
import Login from '../views/login';

const PublicRoutes = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Navigate to="/login" />} />
        <Route path="/history" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
    </Routes>
);

const PritaveRoutes = () => (
    <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path="/login" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
    </Routes>
);

const Router = () => {
    const { user, loading } = useContext(userContext)

    if (!user) return <PublicRoutes />

    return (
        <> 
        <PritaveRoutes />
        <BottomNavBar/> 
        </>
    );
}

export default Router;