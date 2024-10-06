import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import Logo from "/images/Logo200x70.svg";
const Footer = () => {
  return (
    <>
      <div className="footer md:w-[80%] w-full mx-auto py-8 mt-8">
        <div className="footer-nav flex justify-between">
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-[180px]" />
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link className="hover:text-primary" to={"/about-me"}>
                About me
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to={"/sevices"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to={"/book-an-appointment"}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="social-icons flex gap-6">
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
        <div className="more-details flex justify-center gap-6">
          <span>
            <span>&copy;</span>
            2024 Copenhagen.
          </span>
          <span className="flex gap-6">
            <span>
              <span>Designed by</span>
              <span> - </span>
              <Link
                className="underline hover:text-primary"
                to={"https://www.rizwanansari.in"}
              >
                Rizwan Ansari
              </Link>
            </span>
            <span className="font-[300]">
              <span>Powered by</span>
              <span> - </span>
              <Link
                className="underline hover:text-primary"
                to={"https://webflow.com/"}
              >
                Webflow
              </Link>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
