// index.js
import React from 'react';

import { UncontrolledExample } from './slideComponent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import "./styles.css"; // importing the css file into the js file
//import cakeImage from "./assetspic/choc_cake.png";
import { greeting } from "./greeting.js";


console.log(greeting);
console.log("Hello Bintu");

//const image = document.createElement("img");
//image.src = cakeImage;
//document.body.appendChild(image);


//ReactDOM.render is no longer supported in React 18. Use createRoot instead.
const container = document.getElementById('slide'); // Make sure this matches your HTML
const root = createRoot(container);
root.render(<UncontrolledExample />);

