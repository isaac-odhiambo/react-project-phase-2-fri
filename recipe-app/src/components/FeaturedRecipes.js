import React, { useState, useEffect } from 'react';

const FeaturedRecipes = ({ recipes, onMealSelect }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    // Load recipes from local storage
    useEffect(() => {
        const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        onMealSelect(savedRecipes);
    }, [onMealSelect]);

    const handleGetRecipe = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <section id="featured-recipes">
            <h2>Featured Recipes</h2>
            <div className="recipe-cards">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div className="recipe-card" key={recipe.title}>
                            <div className="recipe-preview">
                                <img src={recipe.imageUrl} alt={recipe.title} className="recipe-photo" />
                                <h3>{recipe.title}</h3>
                                <button onClick={() => handleGetRecipe(recipe)}>Get Recipe</button>
                            </div>
                            {selectedRecipe && selectedRecipe.title === recipe.title && (
                                <div className="recipe-details">
                                    <p><strong>Ingredients:</strong><br />{selectedRecipe.ingredients}</p>
                                    <p><strong>Instructions:</strong><br />{selectedRecipe.instructions}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No recipes available. Add some recipes!</p>
                )}
            </div>
        </section>
    );
};

export default FeaturedRecipes;
