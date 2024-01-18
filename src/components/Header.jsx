import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-indigo-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.passionateinmarketing.com%2Fwp-content%2Fuploads%2F2021%2F07%2FIndegene-Logo-1-1536x311.jpg&f=1&nofb=1&ipt=12c8065acfd6d196805c1473dad3a4016aa3707d8453e4328dc20e731bda9864&ipo=images"
            alt=""
            width={120}
          />
        </Link>

        <nav className="space-x-4">
          <Link to="/employees" className="hover:text-gray-300">
            Employees
          </Link>
          <Link to="/employees/add" className="hover:text-gray-300">
            Add Employee
          </Link>
          <Link to="/help" className="hover:text-gray-300">
            Help
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
