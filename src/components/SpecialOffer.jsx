//
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "./Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        <span className="text-coral-red">Special </span>
        <span>Offer</span>

        <p className=" mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-4 flex-wrap mt-11">
            <Button label="Shop Now" iconURL={arrowRight} />
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
