import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StarRating noOfStars={10} />
	</React.StrictMode>
);
