import React from "react";

const Info = () => {
  return (
    <section className="container mx-auto flex justify-center items-center sm:mt-[60px] mt-[30px] ">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl  font-bold font-montserrat ">
          Who Am I
        </h1>
        <div className="flex justify-center items-center bg-gray-500  rounded-full border-2 border-red-500 p-4 w-[350px] h-[350px] sm:mt-[30px] mt-[15px]">
          <div className="text-left  text-lg">
            <p className="text-white font-palanquin font-semibold">
              <span className="font-bold text-orange-600">Name:</span>Lorem,
              ipsum dolor.
            </p>
            <p className="text-white font-palanquin font-semibold">
              <span className="font-bold text-orange-600"> Email: </span>
              Lorem, ipsum. @gmail.com
            </p>
            <p className="text-white font-palanquin font-semibold">
              <span className="font-bold text-orange-600">Tel:</span> XXXXXXXXXX
            </p>
            <p className="text-white font-palanquin font-semibold">
              <span className="font-bold text-orange-600">Age:</span> 18
            </p>
            <p className="text-white font-palanquin font-semibold">
              <span className="font-bold text-orange-600">Experience:</span>{" "}
              python, java, dart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
