import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 py-8 px-10 items-center dark:bg-neutral-600 dark:text-white bg-neutral-200 text-black">
      <div>
        <h1 className="text-2xl font-bold">
          <Link to="/" className="group">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-150">
              /
            </span>
            SnapNote
          </Link>
        </h1>
      </div>
      <div className="text-end">
        <DarkModeSwitch className="mr-1 text-base" />
        <Link to="/settings" className="ml-3 text-base">
          <i className="fa-regular fa-gear fa-xl"></i>
        </Link>
      </div>
    </nav>
  );
}
