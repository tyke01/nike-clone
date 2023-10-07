//  ////////////////////////
import { shoe8 } from "../assets/images";
import Button from "./Button";


const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex  justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <div className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You
          </span>
          <br />
          <span className="text-coral-red">Super Quality </span>
          <span>Shoes</span>

          <p className=" mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and touch of elegance
          </p>
          <p className="info-text mt-6 lg:max-w-lg">
            Our Dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
      
    </section>
  );
};

export default SuperQuality;
