import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Sidenav />
    </>
  );
}

export default App;
