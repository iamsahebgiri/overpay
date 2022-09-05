import { FiEyeOff, FiEye } from "react-icons/fi";
import { classNames } from "lib/classnames";
import * as React from "react";

export const TextField = React.forwardRef(
  ({ label, id, name, type = "text", className, ...rest }, forwardedRef) => {
    const [show, setShow] = React.useState(false);

    return (
      <div>
        {label && (
          <label htmlFor={id || name} className="block mb-2 font-semibold">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            {...rest}
            ref={forwardedRef}
            id={id || name}
            name={name}
            type={show ? "text" : type}
            className={classNames(
              "block w-full py-3 rounded-xl placeholder-slate-400 bg-white border border-slate-300 focus:border-brand-500 focus:ring-0",
              type === "password" && "pr-12",
              className
            )}
          />
          {type === "password" && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShow((show) => !show);
                }}
              >
                {show ? (
                  <FiEye
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                ) : (
                  <FiEyeOff
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextField.displayName = "TextField";
