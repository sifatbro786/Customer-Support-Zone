import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <a className="hover:text-[#7C3AED] transition-colors whitespace-nowrap">Home</a>
            </li>
            <li>
                <a className="hover:text-[#7C3AED] transition-colors whitespace-nowrap">FAQ</a>
            </li>
            <li>
                <a className="hover:text-[#7C3AED] transition-colors whitespace-nowrap">
                    Changelog
                </a>
            </li>
            <li>
                <a className="hover:text-[#7C3AED] transition-colors whitespace-nowrap">Blog</a>
            </li>
            <li>
                <a className="hover:text-[#7C3AED] transition-colors whitespace-nowrap">Download</a>
            </li>
            <li>
                <a className="hover:text-[#7C3AED] transition-colors whitespace-nowrap">Contact</a>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 md:px-10 py-3 flex justify-between items-center">
            {/* Start: Logo and Mobile Menu */}
            <div className="flex items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden p-0 mr-3">
                        <FontAwesomeIcon icon={faBars} className="text-xl text-black" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
                    >
                        {navLinks}
                    </ul>
                </div>
                <a className="text-lg sm:text-xl font-bold text-black cursor-pointer whitespace-nowrap">
                    CS — Ticket System
                </a>
            </div>

            {/* End: Links and Button */}
            <div className="flex items-center gap-4 lg:gap-8">
                <div className="hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 font-medium text-gray-600 gap-2 xl:gap-6 flex-nowrap">
                        {navLinks}
                    </ul>
                </div>

                {/* Action Button */}
                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case px-5 h-11 min-h-0 whitespace-nowrap">
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="hidden sm:inline ml-2">New Ticket</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
