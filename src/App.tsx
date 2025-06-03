import { StrictMode } from "react";
import "./App.css";
import { GeoForm } from "./components/GeoForm";
import { Header } from "./components/Header";

export function App() {
  return (
    <StrictMode>
      <>
        <Header />

        <GeoForm />
      </>
    </StrictMode>
  );
}
