import { classNames } from "lib/classnames";
import * as React from "react";

export const TextField = React.forwardRef(
  ({ label, id, name, type = "text", className, ...rest }, forwardedRef) => {
    return (
      <div>
        {label && (
          <label htmlFor={id || name} className="block mb-2 font-semibold">
            {label}
          </label>
        )}
        <input
          {...rest}
          ref={forwardedRef}
          id={id || name}
          name={name}
          type={type}
          className={classNames(
            "block w-full py-3 rounded-xl placeholder-slate-400 bg-white border border-slate-300",
            className
          )}
        />
      </div>
    );
  }
);

TextField.displayName = "TextField";
