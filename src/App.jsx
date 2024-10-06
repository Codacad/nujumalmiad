import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import { useDispatch, useSelector } from "react-redux";
import { showSpinner, hideSpinner } from "./state/slices/spinerSlice";
import Spinner from "./components/Spinner";
import { useEffect } from "react";
<<<<<<< HEAD
import Footer from "./components/Footer";

=======
import Footer from './components/Footer'
>>>>>>> b8053d478d7f6fb6d51558ffd00469ec71d28b36
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
<<<<<<< HEAD
     <Footer />
=======
      <Footer />
>>>>>>> b8053d478d7f6fb6d51558ffd00469ec71d28b36
    </>
  );
}

export default App;
