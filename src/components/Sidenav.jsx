import React from "react";
import Logo from "/images/Logo200x70.svg";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
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
          !toggle
            ? "-right-[100%]"
            : "right-0"
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
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
