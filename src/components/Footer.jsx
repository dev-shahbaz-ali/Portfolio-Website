import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-100 text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">
          Created with <FaHeart className="inline text-red-400 mx-1" /> by Your
          Name
        </p>
        <p className="text-gray-600">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
}; 

export default Footer;
