import React from "react";
import Logo from "/images/logo.svg";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaFile } from "react-icons/fa";
import { setToggle } from "../state/slices/sidenavSlice";
const Sidenav = () => {
  const { toggle } = useSelector((state) => state.sidenav);
  const dispatch = useDispatch();
  const handleSidenavTogle = () => {
    dispatch(setToggle());
    console.log(toggle);
  };

  return (
    <>
      <div
        className={`sidenav fixed top-0 ${
          !toggle ? "-right-[100%]" : "right-0"
        } w-full min-h-screen z-20 bg-[rgba(0,0,0,.5)]`}
      >
        <nav
          className={`w-[400px] min-h-full p-4 bg-white absolute right-0 top-0`}
        >
          <header className="flex justify-between items-start border-b border-b-gray-200">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
            <span
              onClick={handleSidenavTogle}
              className="mr-3 mt-1 cursor-pointer"
            >
              <IoCloseSharp
                size={30}
                className="font-bold text-primary hover:opacity-80 transition-opacity hover:scale-95 focus:scale-110"
              />
            </span>
          </header>
          <div className="nav-list py-8">
            <ul className="text-gray-700 flex flex-col gap-2 ml-6">
              <li className="flex">
                <Link
                  className="hover:bg-gray-100 p-2 rounded-md w-full"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="hover:bg-gray-100 p-2 rounded-md w-full"
                  to={"/services"}
                >
                  Services
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="hover:bg-gray-100 p-2 rounded-md w-full"
                  to={"/gallery"}
                >
                  Gallery
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="hover:bg-gray-100 p-2 rounded-md w-full"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="hover:bg-gray-100 p-2 rounded-md w-full"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="mt-8 w-[130px] bg-gray-200 text-sm font-[600] p-2 rounded-md flex gap-1 items-center text-gray-950">
                  <FaFile />
                  <span>Request Quote</span>
                </button>
              </li>
            </ul>

            {/* Contact for more details */}

            <div className="contact-for-more">
              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
