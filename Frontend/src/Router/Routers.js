import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import Tours from '../Pages/Tours';

const Routers = () => {
    return
    (
        <Routes>
            <Route path ='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/tours/search' element={<SearchReasultList/>}/> 
            {/* <Route path='*' element={<Navigate to='/home'/>}/> */}
        </Routes>
    )
}