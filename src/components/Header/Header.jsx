import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/Logo/Logo";
import logo from "../../imgs/logo.png";
export function Header() {
  return (
    <div class="flex w-[80%] m-auto pt-10 pb-10">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo src={logo} />
        <div class="flex space-x-10 font-semibold text-xl ">
          <NavLink to={"/"} className="hover:text-red-600">
            Home
          </NavLink>

          <NavLink to={"/AboutUs"} className="hover:text-red-600">
            About Us
          </NavLink>
          <NavLink to={"/Projet"} className="hover:text-red-600">
            Projet
          </NavLink>
          <NavLink to={"/Ajents"} className="hover:text-red-600">
            Ajents
          </NavLink>
        </div>
      </div>
    </div>
  );
}
