import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className="backdrop-blur-sm bg-[black]/40 shadow-xl rounded-b-3xl flex w-full justify-center fixed top-0 my-2 z-50 mt-0 h-15">

      <div className="flex items-center justify-between w-4/5">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10 select-none" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/mihilekhankar/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mihilekhankar"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/immihil"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  )
  // (<div className="flex w-full justify-center fixed">
  //   <div className="flex">
  //     <div className="flex flex-shrink-0 items-center">
  //       <img className="mx-2 w-10 select-none" src={logo} alt="logo" />
  //     </div>
  //     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
  //       <a href="https://www.linkedin.com/in/mihilekhankar/"
  //         target="_blank"
  //         rel="noopener noreferrer">
  //         <FaLinkedin />
  //       </a>
  //       <a href="https://github.com/mihilekhankar"
  //         target="_blank"
  //         rel="noopener noreferrer">
  //         <FaGithub />
  //       </a>
  //       <a href="https://www.instagram.com/immihil"
  //         target="_blank"
  //         rel="noopener noreferrer">
  //         <FaInstagram />
  //       </a>
  //     </div>
  //   </div>
  // </div>)
}

export default Navbar
