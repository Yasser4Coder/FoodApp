import "./App.css";
import {
  Navbar,
  Home,
  Footer,
  Checkout,
  Explore,
  Login,
  Works,
  Copyright,
} from "./components/index";

export const padding = "px-4 sm:px-8 lg:px-16 xl:px20 2xl:px-24 mx-auto";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Works />
      <Login />
      <Explore />
      <Checkout />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
