import React from "react";
import { ReusableComponent as ComponentProps } from "./interface";

const ReusableComponent: React.FC<ComponentProps> = ({
  h1,
  p,
  text,
  image,
  button,
}) => {
  return (
    <div className="w-full h-[100vh] flex lg:justify-center lg:items-center lg:flex-row flex-col">
      <div className="lg:w-[35%] w-full lg:h-[500px] h-[350px] p-4 sm:mt-10 md:mt-20">
        <h1 className="h-[38px] w-[280px] rounded-xl bg-blue-200 flex justify-center items-center lg:ml-5">
          {h1}
        </h1>
        <h1 className="font-bold lg:text-[49px] text-[20px] pl-8 pt-6">
          {text}
        </h1>
        <p className="lg:text-[20px] text-[17px] text-gray-500 pt-8 pl-5">
          {p}
        </p>
        <button className="py-4 px-16 bg-blue-700 mt-12 rounded-lg ml-6">
          {button}
        </button>
      </div>
      <div
        className="lg:w-[40%] w-full lg:h-[580px] flex justify-center items-center h-[438px] mt-24
      "
      >
        <img
          src={image}
          alt="Component Image"
          className="lg:w-[90%] sm:w-[70%] md:w-[70%] h-full bg-center bg-cover lg:ml-16"
        />
      </div>
    </div>
  );
};

export default ReusableComponent;
