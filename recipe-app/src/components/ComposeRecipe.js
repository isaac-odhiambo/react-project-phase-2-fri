import React, { useState } from 'react';

const ComposeRecipe = ({ onRecipeAdded }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && ingredients && instructions) {
            const newRecipe = { title, ingredients, instructions };
            onRecipeAdded(newRecipe);
            setTitle('');
            setIngredients('');
            setInstructions('');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <section id="composepg">
            <h2>Compose Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Recipe Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter recipe title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Enter recipe ingredients"
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Enter recipe instructions"
                        required
                    ></textarea>
                </div>
                <button type="submit">Save</button>
            </form>
        </section>
    );
};

export default ComposeRecipe;
