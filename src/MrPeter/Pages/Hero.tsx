// Imports
import { MdSettingsAccessibility } from "react-icons/md";
import pic from "../../assets/MoniePoint/hero-sub.png";

const Hero = () => {
  return (
    <div className="w-full bg-[#f5f8fc] h-[100%]">
      <div className="w-full h-[50%] bg-[#031335] flex justify-center items-center flex-col">
        <div className="w-[90%] lg:h-[900px] flex justify-center items-center bg-[#031335] mt-24 p-3">
          <div className="w-full h-full bg-[#031335] flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            <div className="w-full min-h-[300px] md:w-1/2 md:h-[400px] lg:h-[800px] lg:w-1/2 flex justify-center items-start flex-col gap-6">
              <div className="mr-12 lg:h-[50px] lg:min-w-[75%] w-[85%] p-1 bg-[#2b3956] rounded-xl flex gap-9 justify-center items-center lg:gap-14">
                <MdSettingsAccessibility className="text-white hidden lg:block" />
                <p className="text-white font-bold sm:text-[11px] lg:text-[16px] pl-3">
                  Africa's fastest growing financial Institution 2023/2024
                </p>
              </div>
              <div className="">
                <h1 className="font-bold lg:text-[70px] text-white text-[18px]">
                  Simple solutions to <br />{" "}
                  <p className="text-green-300"> power your business </p>
                </h1>
                <p className="text-gray-100 pt-3 lg:text-[20px]">
                  Collect payments, access loans and manage <br /> operations
                  with a business banking solution that meets all your needs.
                </p>
              </div>
              <button className="lg:h-[55px] h-[40px] w-[190px] lg:w-[200px] bg-blue-600 lg:mt-7 rounded-md">
                Learn More
              </button>
            </div>
            {/* Conditional rendering for the image div */}
            <div className="hidden lg:flex w-full h-[400px] md:w-1/2 md:h-[400px] lg:h-[800px] lg:w-1/2  justify-center items-center md:block">
              <img src={pic} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
