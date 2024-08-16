import React from 'react';

const ManageRecipes = ({ recipes }) => {
    return (
        <section id="manage-recipes">
            <h2>Manage Recipes</h2>
            <div className="recipe-cards">
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <div className="recipe-card" key={index}>
                            <div className="recipe-preview">
                                <h3>{recipe.title}</h3>
                                <p><strong>Ingredients:</strong><br />{recipe.ingredients}</p>
                                <p><strong>Instructions:</strong><br />{recipe.instructions}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No recipes added yet. Add some recipes!</p>
                )}
            </div>
        </section>
    );
};

export default ManageRecipes;
