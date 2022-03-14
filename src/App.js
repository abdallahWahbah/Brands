import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import AllBrands from './components/Brands/AllBrands';
import CreateBrand from './components/Brands/CreateBrand';
import EditBrand from './components/Brands/EditBrand';
import SingleBrand from './components/Brands/SingleBrand';

const App = () => 
{
    return (
        <React.Fragment>
            <Header />
            {/* There is a small bug, when you edit a field, if you pressed the edit button again, it will print the old value to the form */}
            <Routes>
                <Route path="/" element={<Navigate to="/brands"/>} />
                <Route path="/brands" element={<AllBrands />}/>
                <Route path="/brands/new" element={<CreateBrand/>} />
                <Route path="/brands/edit/:id" element={<EditBrand/>} />
                <Route path="/brands/show/:id" element={<SingleBrand/>} />
            </Routes>
        </React.Fragment>
    )
}

export default App;