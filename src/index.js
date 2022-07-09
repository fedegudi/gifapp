// export * from './components/AddCategory';
// export * from './GifGrid';
// export * from './components/GifItem';

import React from "react";
import ReactDOM from "react-dom/client";
import { GifApp } from "./GifApp";
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <GifApp />
   </React.StrictMode>
 );