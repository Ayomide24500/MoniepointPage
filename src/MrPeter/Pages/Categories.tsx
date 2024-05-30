import { useRef } from "react";
import ReusableComponent from "../../Components/Static/components";
import pic1 from "../../assets/MoniePoint/tool1.png";
import pic2 from "../../assets/MoniePoint/tool2.png";
import pic3 from "../../assets/MoniePoint/tool3.png";
import pic4 from "../../assets/MoniePoint/tool4.png";

const Categories = () => {
  const businessAccountRef = useRef(null);
  const posTerminalRef = useRef(null);
  const expenseCardRef = useRef(null);
  const workingCapitalRef = useRef(null);

  const scrollToRef = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full">
      <div className="min-w-full lg:min-h-[490px] h-[200px] flex flex-col gap-5 justify-center items-center">
        <div className="lg:w-[39%] w-[90%] lg:h-[200px]">
          <p className="lg:text-[44px] text-[20px] text-center font-bold">
            All the tools you need to run your business with ease
          </p>
        </div>
        <div className=" w-[75%] h-[200px] lg:flex  justify-center items-center sm:hidden md:hidden hidden">
          <div className="w-[64%] h-[100px] bg-white rounded-lg flex  justify-around items-center">
            <nav
              className="text-[19px] text-gray-500 border py-2 px-4 rounded-md cursor-pointer"
              onClick={() => scrollToRef(businessAccountRef)}
            >
              Business Account
            </nav>
            <nav
              className="text-[19px] text-gray-500 border py-2 px-4 rounded-md cursor-pointer"
              onClick={() => scrollToRef(posTerminalRef)}
            >
              Point Of Sale Terminal
            </nav>
            <nav
              className="text-[19px] text-gray-500 border py-2 px-4 rounded-md cursor-pointer"
              onClick={() => scrollToRef(expenseCardRef)}
            >
              Expense Card
            </nav>
            <nav
              className="text-[19px] text-gray-500 border py-2 px-4 rounded-md cursor-pointer"
              onClick={() => scrollToRef(workingCapitalRef)}
            >
              Working Capital Loan
            </nav>
          </div>
        </div>
      </div>

      <div className="w-full h-screen relative">
        <div
          ref={businessAccountRef}
          className="w-full h-[600px] flex justify-center items-center gap-5 "
        >
          <ReusableComponent
            h1="Business Account"
            p="Open a free bank account in your business name, in minutes. Access round the clock support, with no hidden fees and complete control over your account."
            text="A free bank account to power your business"
            image={pic1}
            button="Learn More"
          />
        </div>

        <div
          ref={posTerminalRef}
          className="w-full h-[600px] flex justify-center items-center gap-5 sm:mt-56 md:mt-48 mt-[130px] lg:mt-0"
        >
          <ReusableComponent
            h1="Point of Sale Terminal"
            p="Accept card and transfer payments seamlessly, with a reliable point-of-sale terminal. Enjoy instant settlement, easy dispute resolution, and instant payments every time."
            text="POS machine wey no get wahala."
            image={pic2}
            button="Learn More"
          />
        </div>

        <div
          ref={expenseCardRef}
          className="w-full h-[600px] flex justify-center items-center gap-5 md:mt-48  mt-52 lg:mt-0"
        >
          <ReusableComponent
            h1="Expense Card"
            p="Order an expense card to spend and manage your business finance effectively, and get it in 48hrs. Track your business expenses and set limits for different needs."
            text="A secure card for your business expenses"
            image={pic3}
            button="Get the Card "
          />
        </div>

        <div
          ref={workingCapitalRef}
          className="w-full h-[600px] flex justify-center items-center gap-5 sm:mt-48 md:mt-48 mt-[130px] lg:mt-0"
        >
          <ReusableComponent
            h1="Working Capital Loans"
            p="Access working capital loans to help your business grow. Easy request process with business-friendly interest rates and repayment tenures."
            text="Flexible loans that help your business grow"
            image={pic4}
            button="Open An Account"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
