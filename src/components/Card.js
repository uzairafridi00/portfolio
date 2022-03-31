import React from "react";
import profile from "../images/uzair.png";

import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            src={profile}
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            alt="Personal photo"
          />
          <div className="text-center mt-5">
            <p className="text-xl font-bold sm:text-2xl text-gray-900">
              Uzair Afridi
            </p>
            <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
              Laravel Developer / Python Web Scraping
            </p>
            <div className="flex align-center justify-center mt-4">
              <a
                href="https://github.com/uzairafridi00"
                className="text-2xl m-1 p-1 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white"
              >
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
              <a
                href="https://github.com/uzairafridi00"
                target="_blank"
                className="text-2xl m-1 p-1 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white"
              >
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com/uzairafridi00"
                target="_blank"
                className="text-2xl m-1 p-1 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white"
              >
                <FaEnvelope />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
