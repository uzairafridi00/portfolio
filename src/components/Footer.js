import React from "react";

import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="py-5 border-t-3/2">
        <div className="flex justify-center mt-4 ">
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
        <div className="flex justify-center mt-4">
          <p className="text-black mb-4">
            Made With{" "}
            <span className="mr-2" role="link" aria-label="heart">
              💙
            </span>{" "}
            by{" "}
            <a
              href="mailto:uzairafridi00@gmail.com"
              className="text-blue-500 hover:underline "
            >
              Uzair Afridi
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
