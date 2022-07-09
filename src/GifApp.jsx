import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./App.css";



export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

    const handleOnRemove = index => {
      const value = [...categories];
      value.splice(index, 1);
      setCategories(value);
    };


  const handleRemoveAll = () => {
     setCategories(categories.filter((category) => category !== category));
    setCategories([]);
  };


  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>
      
      {/* Input */}
      <AddCategory addCategory={handleAddCategory} 
      className="container" 
      /> 
      {/* Listado de Gif */}
      { <button className="container" onClick={handleRemoveAll}>
        Reset
        </button> }
      <br></br>
      {
      React.Children.toArray(
      categories.map((category) => (
                <>
                { <button className="delete" onClick={handleOnRemove}>eliminar Categoria</button> }
                <GifGrid className="categories" key={category} category={category}/>
                </>
      ))
    )}
     
    </>
  );
};