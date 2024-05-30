import image1 from "../../assets/MoniePoint/biz-3.png";
import image2 from "../../assets/MoniePoint/inv1.png";
import image3 from "../../assets/MoniePoint/inv2.png";
import image4 from "../../assets/MoniePoint/inv3.png";
import image5 from "../../assets/MoniePoint/inv4.png";
import image6 from "../../assets/MoniePoint/biz-6.png";

const ScrollBox = () => {
  return (
    <div className="min-w-[80%] h-[500px] bg-white rounded-md flex justify-center items-center flex-col gap-5">
      <div className="w-[95%] h-[250px] flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col lg:justify-around min-w-[64%]">
          <h1 className="lg:text-[29px] lg:font-bold pt-4">
            Business that Count On Us
          </h1>{" "}
          <p className="text-gray-600 lg:text-[20px] pt-5 lg:pt-0">
            Join over{" "}
            <span className="lg:font-bold text-blue-700">2 million</span>{" "}
            successful business owners who trust Moniepoint for all their
            business needs.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <h1 className="text-[80px] border-1 border-blue-800 text-blue-700 lg:flex hidden">
            2m
          </h1>
        </div>
      </div>

      <div className="w-[95%] h-[450px] overflow-hidden relative mt-10">
        <div className="absolute left-0 top-0 w-full h-full flex justify-center gap-10 items-center animate-slide">
          <div className="w-[290px] h-[250px] flex-shrink-0 p-1">
            <img
              src={image1}
              alt="image1"
              className="w-full h-full object-contain bg-center border rounded-lg"
            />
          </div>
          <div className="w-[290px] h-[250px] flex-shrink-0 p-1">
            <img
              src={image2}
              alt="image2"
              className="w-full h-full object-contain bg-center border rounded-lg"
            />
          </div>
          <div className="w-[290px] h-[250px] flex-shrink-0 p-1">
            <img
              src={image3}
              alt="image3"
              className="w-full h-full object-contain bg-center border rounded-lg"
            />
          </div>
          <div className="w-[290px] h-[250px] flex-shrink-0 p-1">
            <img
              src={image4}
              alt="image3"
              className="w-[80%] h-full object-contain bg-center border rounded-lg"
            />
          </div>
          <div className="w-[250px] h-[250px] flex-shrink-0 p-1">
            <img
              src={image5}
              alt="image3"
              className="w-full h-full object-contain bg-center border rounded-lg"
            />
          </div>
          <div className="w-[250px] h-[250px] flex-shrink-0 p-1">
            <img
              src={image6}
              alt="image3"
              className="w-full h-full object-contain bg-center border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBox;
