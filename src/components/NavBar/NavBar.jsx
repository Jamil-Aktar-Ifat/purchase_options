import Link from "../Link/Link";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/profile", name: "Profile" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];
  return (
    <nav>
      <div
        className="md:hidden text-2xl bg-slate-400 p-5 "
        onClick={() => setOpen(!open)}
      >
        {open === true ? <RxCross1 /> : <RiMenu5Line />}
      </div>
      <ul
        className={`md:flex absolute duration-1000 md:static
      ${open ? "top-15" : "-top-60"}
       bg-gray-400 px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
