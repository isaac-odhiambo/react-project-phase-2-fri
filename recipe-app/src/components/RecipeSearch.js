import React, { useState, useEffect } from 'react';

const RecipeSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [allMeals, setAllMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [searchActive, setSearchActive] = useState(true); // To control search activity

    useEffect(() => {
        if (searchTerm.trim() === '' || !searchActive) {
            // Reset meals if the search term is empty or search is inactive
            setFilteredMeals([]);
            return;
        }

        // Fetch meals based on the search term
        const fetchMeals = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await response.json();
                setAllMeals(data.meals || []);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, [searchTerm, searchActive]);

    useEffect(() => {
        // Filter meals based on the search term
        const filterMeals = () => {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            const filtered = allMeals.filter(meal =>
                meal.strMeal.toLowerCase().includes(lowercasedSearchTerm)
            );
            setFilteredMeals(filtered);
        };

        filterMeals();
    }, [allMeals, searchTerm]);

    const handleGetRecipe = async (meal) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
            const data = await response.json();
            setSelectedMeal(data.meals[0]);
            setFilteredMeals([]); // Clear filtered meals immediately
            setSearchActive(false); // Stop further searches
        } catch (error) {
            console.error('Error fetching meal details:', error);
        }
    };

    const handleCloseDetails = () => {
        setSelectedMeal(null);
        setSearchActive(true); // Allow further searches
        setSearchTerm(''); // Optionally clear the search term
        setFilteredMeals([]); // Clear the filtered meals as well
    };

    return (
        <section id="recipes">
            <div className="meal-wrapper">
                <div className="meal-search">
                    <h2 className="title">Hey.. Type A Dish Name Here</h2>
                    <div className="meal-search-box">
                        <input
                            type="text"
                            className="search-control"
                            placeholder="Enter A Dish Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="meal-result">
                    <h2 className="title">Your Search Results:</h2>
                    <div id="meal">
                        {filteredMeals.length > 0 ? (
                            filteredMeals.map(meal => (
                                <div className="meal-item" data-id={meal.idMeal} key={meal.idMeal}>
                                    <div className="meal-img">
                                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                                    </div>
                                    <div className="meal-name">
                                        <h3>{meal.strMeal}</h3>
                                        <button className="recipe-btn" onClick={() => handleGetRecipe(meal)}>
                                            Get Recipe
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No meals found. Try a different search term.</p>
                        )}
                    </div>
                </div>
                {selectedMeal && (
                    <div className="recipe-details">
                        <h2 className="card-title">{selectedMeal.strMeal}</h2>
                        <div className="card-image">
                            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
                        </div>
                        <div className="card-details">
                            <p><strong>Ingredients:</strong><br />{selectedMeal.strIngredients}</p>
                            <p><strong>Instructions:</strong><br />{selectedMeal.strInstructions}</p>
                            {selectedMeal.strYoutube && (
                                <button className="watch-video-btn" onClick={() => window.open(selectedMeal.strYoutube, '_blank')}>
                                    Watch Video
                                </button>
                            )}
                            <button className="close-details-btn" onClick={handleCloseDetails}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RecipeSearch;
