import { StrictMode } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { CitiesCards } from "./components/CitiesCards";

export function App() {
  return (
    <StrictMode>
      <>
        <Header />

        <Main />

        <CitiesCards />
      </>
    </StrictMode>
  );
}
