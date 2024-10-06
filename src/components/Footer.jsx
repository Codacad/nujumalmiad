import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import Logo from "/images/logo.svg";
const Footer = () => {
  return (
    <>
      <div className="footer  bg-gray-100 w-full py-8 border-t border-gray-200">
        <div className="md:w-[80%] w-full mx-auto">
          <div className="footer-nav flex justify-between max-md:flex-col items-center max-md:gap-2">
            <Link to={"/"}>
              <img src={Logo} alt="" className="w-[180px]" />
            </Link>
            <ul className="flex gap-6 font-[300]">
              <li>
                <Link className="hover:text-primary hover:underline" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary hover:underline"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary hover:underline"
                  to={"/services"}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary hover:underline"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="social-icons max-md:mt-4 flex gap-6">
              <Link to={"https://www.github.com/codacad"} target="_blank">
                <span>
                  <FaGithub size={30} className="text-primary" />
                </span>
              </Link>
              <Link to={"https://www.linkedin.com/in/codacad"} target="_blank">
                <span>
                  <CiLinkedin size={30} className="text-primary" />
                </span>
              </Link>
              <Link to={""}>
                <span>
                  <CiFacebook size={30} className="text-primary" />
                </span>
              </Link>
            </div>
          </div>
          <div className="more-details flex justify-center max-md:flex-col max-md:items-center md:gap-6 gap-2 font-[300] mt-10">
            <span>
              <span>&copy;</span>
              2024 - 2025 Nujum Al Miad.
            </span>
            <span className="flex gap-6 font-[300]">
              <span>
                <span>Developed by</span>
                <span> - </span>
                <Link
                  target="_blank"
                  className="underline hover:text-primary"
                  to={"https://www.rizwanansari.in"}
                >
                  Rizwan Ansari
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
