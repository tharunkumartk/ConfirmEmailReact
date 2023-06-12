import logo from "./logo.svg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import HomePage from "./components/HomePage";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return <HomePage />;
}

export default App;
