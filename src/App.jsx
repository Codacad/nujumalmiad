import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import { useDispatch, useSelector } from "react-redux";
import { showSpinner, hideSpinner } from "./state/slices/spinerSlice";
import Spinner from "./components/Spinner";
import { useEffect } from "react";
import Footer from './components/Footer'
function App() {
  const { loading } = useSelector((state) => state.spiner);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showSpinner());

    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1000);
  }, [location.pathname, dispatch]);
  return (
    <>
      {loading && <Spinner />}
      <div className="scroll-drawer"></div>
      <Navbar />
      <Outlet />
      <Sidenav />
      <Footer />
    </>
  );
}

export default App;
