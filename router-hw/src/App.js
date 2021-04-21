import React from "react";
import './App.css';
import Navigation from "./components/navigation";
import Routes from "./routes";

export default function App() {
  return (
      <div>
        <Navigation/>
          <Routes/>
      </div>
  );
}
