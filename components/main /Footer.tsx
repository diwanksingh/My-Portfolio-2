import React from 'react';

function Footer() {
  return (
    <footer className=" bg-black  text-gray-500 overflow-hidden text-center py-12 w-full ">
      <div className="w-full bg-white h-[0.5px]"></div>
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <p className="text-sm mb-2">
          Developed by <span className="font-bold text-indigo-400">Diwank Singh</span> | All Rights Reserved
        </p>
        <p className="text-sm text-gray-300">Thank you for visiting!</p>
        <div className="mt-6">
          <hr className="border-gray-600 mb-4" />
          <a
            href="#top"
            className="text-indigo-400 hover:text-indigo-200 transition-colors duration-300 text-sm"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
