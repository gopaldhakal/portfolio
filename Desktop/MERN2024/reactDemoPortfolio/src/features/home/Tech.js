import React from "react";
import {
  DiAtom,
  DiCodepen,
  DiCss3Full,
  DiPython,
  DiReact,
  DiSwift,
} from "react-icons/di";

const Tech = () => {
  return (
    <div className="">
      <h1 className="text-4xl pt-1 text-center">Technologies I use</h1>

      <div className="pt-2 grid grid-cols-4 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <DiReact
          size={200}
          className="hover:scale-110 hover:text-pink-700 animate-bounce"
        />
        <DiPython size={200} />
        <DiCss3Full size={200} />
        <DiSwift size={200} />
        <DiAtom size={200} />
        <DiCodepen size={200} />
      </div>
    </div>
  );
};

export default Tech;
