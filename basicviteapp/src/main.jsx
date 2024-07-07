import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //  MyApp()
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//to use this we can uncomment above MyApp() and comment the rest of lines
//but this is not the best way we should use <App />
function MyApp() {
  return (
    <>
      <h4>putting a component from a funciton in same file</h4>
    </>
  );
}
