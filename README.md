## Recipe App
## Overview
The Recipe App is a React-based web application designed to manage, search, and explore recipes. Users can view featured recipes, search for recipes, view details of individual recipes, compose new recipes, and contact the team. The app leverages a local server to fetch and store recipe data and uses React Router for navigation between different pages.

## Features
Featured Recipes: Displays a list of popular or highlighted recipes.
Recipe Search: Allows users to search for recipes by name or ingredients.
Recipe Details: Provides detailed information about a specific recipe.
Compose Recipe: Enables users to submit new recipes.
Manage Recipes: Manages and displays newly created recipes.
Contact Form: Allows users to get in touch with the team.
## Technologies Used
React: For building the user interface and managing state.
React Router: For handling client-side routing.
CSS: For styling the application.
Fetch API: For making HTTP requests to a local server.
## Components
## App.js
The main component that sets up routing and manages state.

State Management:

recipes: Holds the list of recipes fetched from the server.
selectedMeal: Stores the currently selected recipe for detail view.
Functions:

handleRecipeAdded: Adds a new recipe to the state and optionally posts it to the server.
onMealSelect: Sets the selected meal for viewing details.
Routes:

/: Displays the HeroSection, FeaturedRecipes, and RecipeSearch.
/recipe/:id: Displays RecipeDetails for a specific recipe.
/compose: Displays ComposeRecipe for adding new recipes.
/contact: Displays ContactForm.
## Header
Function: Displays the navigation menu and logo.
Props: None
Styling: Includes navigation links and logo styling.
## HeroSection
Function: Shows a hero image with a headline and call-to-action button.
Props: None
Styling: Background image and central text styling.
FeaturedRecipes
Function: Displays a list of featured recipes.
Props:
recipes: Array of recipe objects.
onMealSelect: Function to handle selecting a meal.
State Management: Receives recipes and renders them in a card layout.
## RecipeSearch
Function: Provides a search bar for finding recipes.
Props:
onMealSelect: Function to handle selecting a meal.
State Management: Manages the search input and triggers search actions.
RecipeDetails
Function: Shows detailed information about a selected recipe.
Props:
selectedMeal: Object representing the currently selected recipe.
State Management: Displays details based on the selected recipe.
## ComposeRecipe
Function: Form for submitting new recipes.
Props:
onRecipeAdded: Function to handle adding the new recipe.
State Management: Manages form input and submits data.
## ManageRecipes
Function: Displays and manages newly created recipes.
Props: None
State Management: Receives and displays recipes submitted through the ComposeRecipe component.
ContactForm
Function: Allows users to submit inquiries or feedback.
Props: None
State Management: Manages form input and submission.
## Footer
Function: Displays footer content.
Props: None
Styling: Centered text and background color.
## Component Relationships and Data Flow
App.js: Acts as the central hub. It fetches data from the server and passes it down to components as props. It also handles routing and state management.

Header: Always visible at the top of the application. It does not interact with other components directly but provides navigation links.

HeroSection: Displays a static section with a background image and text. It does not directly interact with other components.

FeaturedRecipes: Receives the recipes array from App.js and displays a list of featured recipes. It also receives onMealSelect to handle recipe selection.

RecipeSearch: Provides a search interface and uses onMealSelect to handle recipe selection. It does not manage data directly but interacts with App.js to pass selected recipes.

RecipeDetails: Receives selectedMeal from App.js and displays detailed information about the selected recipe.

## ComposeRecipe: Manages form input and submits new recipes. It uses onRecipeAdded to send the new recipe data back to App.js, which then updates the recipes state.

## ManageRecipes: Displays newly created recipes. It does not directly manage data but relies on App.js to provide updated recipe data.

## ContactForm: Handles user inquiries or feedback. It manages its own form state and submission.

Footer: Always visible at the bottom of the application and does not interact with other components.

Installation and Usage
Clone the Repository:

bash
Copy code
git clone https://github.com/your-repo/recipe-app.git
cd recipe-app
Install Dependencies:

bash
Copy code
npm install
## Start the Local Server:
Ensure your local server is running at http://localhost:4000 or update the URL in the fetch requests.

Start the Development Server:

bash
Copy code
npm start
Open Your Browser:
Navigate to http://localhost:3000 to view the app.

## Contributing
Feel free to submit issues or pull requests to improve the app. Contributions are welcome!

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to adjust any section based on your specific needs or if there are additional features or components to include.

https://www.themealdb.com/api/json/v1/1/lookup.php?

visit the link to see the webpage
https://react-project-phase-2-fri.vercel.app/
