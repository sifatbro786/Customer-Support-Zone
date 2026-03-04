// import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function Footer() {
//     return (
//         <>
//             <footer className="footer sm:footer-horizontal bg-black text-base-content p-10 flex justify-between">
//                 <aside>
//                     <a className="text-lg sm:text-xl font-bold text-white cursor-pointer whitespace-nowrap">
//                         CS — Ticket System
//                     </a>
//                     <p className="text-gray-200 pt-1">
//                         Streamlining customer support with <br />
//                         real-time ticket tracking and automated <br />
//                         workflows. Our platform ensures every <br />
//                         technical issue is resolved efficiently to <br />
//                         keep your business moving forward.
//                     </p>
//                 </aside>

//                 <nav>
//                     <h6 className="text-white font-bold text-lg">Company</h6>
//                     <a className="link link-hover">About Us</a>
//                     <a className="link link-hover">Our Mission</a>
//                     <a className="link link-hover">Contact Seller</a>
//                 </nav>
//                 <nav>
//                     <h6 className="text-white font-bold text-lg">Services</h6>
//                     <a className="link link-hover">Products & Services</a>
//                     <a className="link link-hover">Customer Stories</a>
//                     <a className="link link-hover">Download Apps</a>
//                 </nav>
//                 <nav>
//                     <h6 className="text-white font-bold text-lg">Information</h6>
//                     <a className="link link-hover">Privacy policy</a>
//                     <a className="link link-hover">Terms & Conditions</a>
//                     <a className="link link-hover">Join Us</a>
//                 </nav>
//                 <nav>
//                     <h6 className="text-white font-bold text-lg">Social Links</h6>
//                     <a className="flex items-center gap-2 link link-hover pt-1">
//                         <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
//                         @CS — Ticket System
//                     </a>
//                     <a className="flex items-center gap-2 link link-hover pt-2">
//                         <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
//                         @CS — Ticket System
//                     </a>
//                     <a className="flex items-center gap-2 link link-hover">
//                         <FontAwesomeIcon icon={faFacebook} className="text-2xl pt-2" />
//                         @CS — Ticket System
//                     </a>
//                     <a className="flex items-center gap-2 link link-hover">
//                         <FontAwesomeIcon icon={faEnvelope} className="text-2xl pt-2" />
//                         support@cst.com
//                     </a>
//                 </nav>
//             </footer>

//             <div className="bg-black">
//                 <hr className="text-gray-700" />
//                 <p className="text-center text-gray-300 py-7">
//                     © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
//                 </p>
//             </div>
//         </>
//     );
// }

import { faFacebookF, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 md:pt-24 pb-10">
            <div className="px-6 md:px-12 lg:px-10">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-8 mb-16 ">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl lg:text-2xl font-bold pb-6 tracking-tight">
                            CS — Ticket System
                        </h2>
                        <p className="text-gray-400 text-sm leading-6 max-w-xs">
                            Streamlining customer support with real-time ticket tracking and
                            automated workflows. Our platform ensures every technical issue is
                            resolved efficiently to keep your business moving forward.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">Company</h3>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            About Us
                        </a>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            Our Mission
                        </a>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            Contact Sales
                        </a>
                    </div>

                    {/* Services Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">Services</h3>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            Products & Services
                        </a>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            Customer Stories
                        </a>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            Download Apps
                        </a>
                    </div>

                    {/* Information Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">Information</h3>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            Terms & Conditions
                        </a>
                        <a className="text-gray-400 hover:text-white transition-colors text-sm">
                            Join Us
                        </a>
                    </div>

                    {/* Social Links Section */}
                    <div className="flex flex-col gap-5 pb-10">
                        <h3 className="text-lg font-bold mb-2">Social Links</h3>

                        {/* Twitter/X */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:bg-primary transition-all">
                                <FontAwesomeIcon
                                    icon={faXTwitter}
                                    className="text-black text-[10px]"
                                />
                            </div>
                            <span className="text-gray-400 text-sm group-hover:text-white">
                                @CS — Ticket System
                            </span>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:bg-primary transition-all">
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    className="text-black text-[10px]"
                                />
                            </div>
                            <span className="text-gray-400 text-sm group-hover:text-white">
                                @CS — Ticket System
                            </span>
                        </div>

                        {/* Facebook */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:bg-primary transition-all">
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="text-black text-[10px]"
                                />
                            </div>
                            <span className="text-gray-400 text-sm group-hover:text-white">
                                @CS — Ticket System
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:bg-primary transition-all">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-black text-[10px]"
                                />
                            </div>
                            <span className="text-gray-400 text-sm group-hover:text-white">
                                support@cst.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Border and Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
