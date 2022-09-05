import { classNames } from "lib/classnames";
import React, { useEffect, useState } from "react";
import { Overpay } from "./logo";

const Carousel = ({ hasLogo = false }) => {
  const contents = [
    {
      id: 1,
      image: "/images/carousel/get-better-with-money.png",
      title: "Get better with money",
      body: "Overpay help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span class='text-yellow-400'>$20</span> bonus when you receive qualifying direct deposits",
    },
    {
      id: 2,
      image: "/images/carousel/speedy-easy-fast.png",
      title: "Speedy, Easy and Fast",
      body: "Overpay help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span class='text-yellow-400'>$20</span> bonus when you receive qualifying direct deposits",
    },
    {
      id: 3,
      image: "/images/carousel/get-better-with-money.png",
      title: "Built for the gen z",
      body: "Overpay help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span class='text-yellow-400'>$20</span> bonus when you receive qualifying direct deposits",
    },
  ];

  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % contents.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-4 h-full">
      <div className="bg-brand-500 h-full relative">
        {hasLogo && (
          <div className="absolute  p-4">
            <Overpay type="white" />
          </div>
        )}
        <div className="bg-pattern h-full bg-contain bg-center bg-no-repeat px-6 py-8 flex flex-col justify-between items-center">
          <div />
          <div>
            <div className="py-3">
              <img
                src={contents[current].image}
                alt={contents[current].title}
                className="mx-auto"
              />
            </div>
            <div>
              <h3 className="text-4xl text-center font-extrabold text-white">
                {contents[current].title}
              </h3>
              <div className="max-w-lg mx-auto">
                <p
                  className="mt-2 text-sm text-center text-slate-300"
                  dangerouslySetInnerHTML={{ __html: contents[current].body }}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-1 mt-3">
            {contents.map((content, i) => (
              <div
                key={content.id}
                className={classNames(
                  "h-2 rounded-full hover:cursor-pointer",
                  current === i ? "w-8 bg-white" : "w-2 bg-slate-300"
                )}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
