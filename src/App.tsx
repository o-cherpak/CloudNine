import { StrictMode } from "react";
import "./App.css";
import { GeoForm } from "./components/GeoForm";
import { Header } from "./components/Header";
import { CitiesCards } from "./components/CitiesCards";

export function App() {
  return (
    <StrictMode>
      <>
        <Header />

        <GeoForm />

        <CitiesCards />
      </>
    </StrictMode>
  );
}
