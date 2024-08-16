// src/components/Hero.js
import React from 'react';


const Hero = () => {
    return (
        <section className="hero">
            <img src="https://cms-b-assets.familysearch.org/dims4/default/4069e21/2147483647/strip/true/crop/800x500+0+0/resize/800x500!/format/webp/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F2d%2F7a%2Ff452bba9d5c8581030392bd4e252%2Fenglish-breakfast.jpg" alt="Hero" />
            <div className="heros">
                <h1>TASTY TRACKS</h1>
                <p>Discover, Create, and Share Delicious Recipes</p>
                <a href="#recipes"><button className="heros-btn">Recipes</button></a>
            </div>
        </section>
    );
};

export default Hero;
