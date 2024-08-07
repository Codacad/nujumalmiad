import { Link } from "react-router-dom";
// import Logo from "/images/Logo200x70.svg";
import Logo from "/images/logo.svg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { setToggle } from "../state/slices/sidenavSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  const { toggle } = useSelector((state) => state.sidenav);
  const dispatch = useDispatch();
  const handleSidenavTogle = () => {
    dispatch(setToggle());
    console.log(toggle);
  };
  return (
    <>
      <nav className="flex gap-4 font-spaceGrotesk  bg-white items-center md:px-8 px-2">
        <h1 className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" className="" />
          </Link>
        </h1>
        <ul className="text-gray-700 hidden md:flex gap-4 ml-6">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
          <li>
           
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <div className="social-icons hidden md:flex gap-2 items-center ml-4">
          <span className="hover:bg-primary cursor-pointer rounded-full transition-all duration-200 ease-linear hover:text-white text-primary">
            <FaFacebook size={20} />
          </span>
          <span className="hover:bg-primary cursor-pointer hover:text-white text-primary">
            <FaLinkedin size={20} />
          </span>
        </div>
        <button className="ml-auto w-[130px] hidden md:block text-sm bg-primary p-2 rounded-md shadow-md text-white">
          Request Quote
        </button>
        <div className="hamburger block max-md:ml-auto">
          <span onClick={handleSidenavTogle} className="cursor-pointer">
            <RiMenu3Line size={20} className="text-primary font-bold" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
