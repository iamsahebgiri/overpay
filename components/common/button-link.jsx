import { buttonClasses } from "components/common/button";
import Link from "next/link";
import * as React from "react";

export const ButtonLink = React.forwardRef(
  (
    {
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale,
      className,
      variant = "primary",
      responsive,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <Link
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
      >
        <a
          {...rest}
          ref={forwardedRef}
          className={buttonClasses({ className, variant, responsive })}
        />
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";
