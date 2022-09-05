import { Button } from "components/common/button";
import FullHeader from "components/layout/full-header";
import React from "react";

const Welcome = () => {
  return (
    <FullHeader>
      <div>
        <h2 className="text-3xl text-center font-extrabold text-slate-900">
          Hi, John Doe!
        </h2>
        <p className="mt-3 text-sm text-center text-slate-500">
          You&apos;re logged in. Well done!
        </p>
        <Button className="w-full mt-6">Log out</Button>
      </div>
    </FullHeader>
  );
};

export default Welcome;
