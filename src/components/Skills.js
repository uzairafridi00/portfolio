import React from "react";
import { FaPython, FaLaravel, FaPhp, FaReact, FaJava } from "react-icons/fa";

export default function Skills() {
  return (
    <div
      className="max-w-4xl mx-auto justify-center py-12 text-center"
      id="tech"
    >
      <a className="text-2xl text-black sm:text-4xl pt-4 font-bold">
        Tech I Use
      </a>

      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden cursor-pointer bg-white shadow-xl rounded-xl sm:w-52 hover:shadow-md">
          <FaPython color="#4B8BBE" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Python
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden cursor-pointer bg-white shadow-xl rounded-xl sm:w-52 hover:shadow-md">
          <FaLaravel color="#f05340" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Laravel
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden cursor-pointer bg-white shadow-xl rounded-xl sm:w-52 hover:shadow-md">
          <FaPhp color="#RRGGBB" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            PHP
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden cursor-pointer bg-white shadow-xl rounded-xl sm:w-52 hover:shadow-md">
          <FaReact color="#61dbfb" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden cursor-pointer bg-white shadow-xl rounded-xl sm:w-52 hover:shadow-md">
          <FaJava color="#D0A384" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Java
          </p>
        </div>
      </div>
    </div>
  );
}
