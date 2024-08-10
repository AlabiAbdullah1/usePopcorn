import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import App from './App.js'
import "./index.css";
// import AppV1 from "./App v1.jsx";
import AppV2 from "./App v2.jsx";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppV1 /> */}
    <AppV2 />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      className="test"
      defaultRating={3}
    /> */}
    {/* <Test/> */}
  </React.StrictMode>
);
