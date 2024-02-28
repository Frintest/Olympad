import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";
import "focus-visible";
import { App } from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("wrapper"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
