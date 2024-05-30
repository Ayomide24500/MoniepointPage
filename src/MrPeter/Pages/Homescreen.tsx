import Categories from "./Categories";
import Hero from "./Hero";
import ScrollBox from "./ScrollBox";

const Homescreen = () => {
  return (
    <div>
      <Hero />
      <div className="relative lg:bottom-16 bg-[] w-full h-[550px] flex justify-center items-center">
        <ScrollBox />
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
};

export default Homescreen;
