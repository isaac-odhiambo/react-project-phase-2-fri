// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="recipeIcon.jpg" alt="Logo" />
                </div>
                <p id="tasty">Tasty<span>Tracks</span></p>
                <ul>
                    <li><a href="#featured-recipes">Featured Recipes</a></li>
                    <li><a href="#composepg">Compose Recipe</a></li>
                    <li><a href="#recipes">Recipes</a></li>
                    <li><a href="#contact-form">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
