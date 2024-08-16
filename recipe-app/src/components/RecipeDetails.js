import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const RecipeDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealById = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal by ID:", error);
      }
    };

    fetchMealById();
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="meal-details-content">
      <h2 className="recipe-title">{meal.strMeal}</h2>
      <p className="recipe-category">{meal.strCategory}</p>
      <div className="recipe-instruct">
        <h3>Instructions:</h3>
        <p>{meal.strInstructions}</p>
      </div>
      <div className="recipe-meal-img">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="recipe-link">
        <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a>
      </div>
    </div>
  );
};

export default RecipeDetails;
