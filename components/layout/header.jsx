import { ButtonLink } from "components/common/button-link";
import { Overpay } from "components/common/logo";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="bg-slate-800 w-full">
      <div className="mx-auto max-w-7xl px-2 py-3">
        <div className="flex justify-between items-center ">
          <Link href="/">
            <a>
              <Overpay type="duotone" />
            </a>
          </Link>
          <ButtonLink href="/">Logout</ButtonLink>
        </div>
      </div>
    </div>
  );
};
