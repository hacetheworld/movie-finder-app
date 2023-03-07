import { Main } from "./components/main";
import { NavbarComp } from "./components/navbar";
import "./styles.css";
import { MovieContextProvider } from "./components/contextapi";
export default function App() {
  return (
    <MovieContextProvider>
      <NavbarComp />
      <Main />
    </MovieContextProvider>
  );
}
