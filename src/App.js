import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "cec4125a";
  const APP_KEY = "2956e524e8b9bae17b12acc2873f31bc";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="app">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
