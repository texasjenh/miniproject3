import React from 'react';
import '../App.css'
import Navbar from '../components/navbar';

function Header() {
    return (
        <header className="header">
            <h1 className="h1">~The Book Nook~</h1>
            <img src="/images/bookshelf.jpg" alt="colorful bookshelf"/>
        </header>
        
    )
}

export default Header