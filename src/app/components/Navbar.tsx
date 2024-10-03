import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm shadow-lg ">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center justify-evenly h-16">
                    <div className="flex space-x-4 text-white">
                        <a href="#project" className="hover:text-gray-300 transition text-lg font-semibold">Projects</a>
                        <a href="https://github.com/ifrah-ashraf/" target="_blank" className="hover:text-gray-300 transition"><FaGithub className="text-2xl" /></a>
                        <a href="https://www.linkedin.com/in/ifrah-ashraf-6579a7278/"  target="_blank" className="hover:text-gray-300 transition"><FaLinkedin className="text-2xl" /></a>
                        <a href="#" className="hover:text-gray-300 transition"><FaXTwitter className="text-2xl" /></a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

