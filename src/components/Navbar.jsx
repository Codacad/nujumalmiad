import { Link } from "react-router-dom";
// import Logo from "/images/Logo200x70.svg";
import Logo from "/images/logo.svg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { setToggle } from "../state/slices/sidenavSlice";
import { MdHome } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RiMenu3Line } from "react-icons/ri";
import { FaServicestack } from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";
import { FaFile } from "react-icons/fa";
const Navbar = () => {
  const { toggle } = useSelector((state) => state.sidenav);
  const dispatch = useDispatch();
  const handleSidenavTogle = () => {
    dispatch(setToggle());
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
            <Link className="flex items-center gap-1" to={"/"}>
              <MdHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" to={"/services"}>
              {" "}
              <FaServicestack /> <span>Services</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" to={"/gallery"}>
              {" "}
              <MdPhotoSizeSelectActual /> <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" to={"/about"}>
              {" "}
              <MdOutlineRoundaboutRight /> <span>About</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" to={"/contact"}>
              {" "}
              <MdContactEmergency /> <span>Contact</span>
            </Link>
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
        <button className="ml-auto w-[140px] hidden md:flex items-center gap-1 text-sm bg-primary p-2 rounded-md shadow-md text-white">
          <FaFile />
          <span>Request Quote</span>
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
