import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black md:text-4xl font-bold text-center">
          Hey 👋
        </p>
        <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
          I'm a passionate Web developer. I have created content for people. I
          also love freelancing and like working on open source projects.
        </p>
        <ScrollIntoView selector="#tech" className="cursor-pointer">
          <div className="mx-auto p-20">
            <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
          </div>
        </ScrollIntoView>
      </div>
    </>
  );
}
