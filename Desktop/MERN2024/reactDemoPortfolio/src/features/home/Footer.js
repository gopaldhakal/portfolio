import React from "react";

const Footer = () => {
  return (
    <section className="">
      <div class="relative ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00000"
            fill-opacity="1"
            d="M0,192L1440,64L1440,320L0,320Z"
          ></path>
        </svg>
        <div class="absolute bottom-0 text-white inset-x-0 top-[50%] flex justify-center flex-col items-center  text-lg">
          <h1>Develop By</h1>
          <h1>someones</h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
