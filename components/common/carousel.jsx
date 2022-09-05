import React from "react";
import { Overpay } from "./logo";

const Carousel = ({ hasLogo = false }) => {
  return (
    <div className="p-4 h-full">
      <div className="bg-brand-500 h-full relative">
        {hasLogo && (
          <div className="absolute  p-4">
            <Overpay type="white" />
          </div>
        )}
        <div className="bg-pattern h-full bg-contain bg-center bg-no-repeat px-6 py-8 flex flex-col justify-center">
          <div>
            <div className="py-8">
              <img
                src="/images/carousel/get-better-with-money.png"
                alt="Get better with money"
                className="mx-auto"
              />
            </div>
            <h3 className="text-4xl text-center font-extrabold text-white">
              Get better with money
            </h3>
            <div className="max-w-lg mx-auto">
              <p className="mt-2 text-sm text-center text-slate-300">
                Overpay help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus when you receive qualifying direct
                deposits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
