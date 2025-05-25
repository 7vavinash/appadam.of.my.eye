import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import seedData from './data/recipes.json';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem('recipes');
    setRecipes(saved ? JSON.parse(saved) : seedData);
  }, []);

  const addRecipe = (r) => {
    const updated = [r, ...recipes];
    setRecipes(updated);
    localStorage.setItem('recipes', JSON.stringify(updated));
  };

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add" element={<AddRecipeForm onAdd={addRecipe} />} />
      </Routes>
    </HashRouter>
  );
}
