import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import FeaturedRecipes from "./components/FeaturedRecipes";
import RecipeSearch from "./components/RecipeSearch";
import RecipeDetails from "./components/RecipeDetails";
import ComposeRecipe from "./components/ComposeRecipe";
import ManageRecipes from "./components/ManageRecipes"; // Ensure ManageRecipes is imported
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]); // All recipes (including featured)
  const [newRecipes, setNewRecipes] = useState([]); // Newly created recipes
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    // Fetch recipes from the local server
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:4000/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  // Handle new recipe addition
  const handleRecipeAdded = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]); // Update all recipes
    setNewRecipes((prevNewRecipes) => [...prevNewRecipes, newRecipe]); // Update new recipes

    // Optionally, you might want to also post to server here
    // fetch('http://localhost:4000/recipes', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(newRecipe),
    // });
  };

  // Function to handle meal selection
  const onMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturedRecipes recipes={recipes} onMealSelect={onMealSelect} />
                <ComposeRecipe onRecipeAdded={handleRecipeAdded} />
                <ManageRecipes recipes={newRecipes} />
                <RecipeSearch onMealSelect={onMealSelect} />
              </>
            }
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails selectedMeal={selectedMeal} />}
          />
          <Route
            path="/compose"
            element={<ComposeRecipe onRecipeAdded={handleRecipeAdded} />}
          />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
