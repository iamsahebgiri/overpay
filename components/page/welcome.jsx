import { Button } from "components/common/button";
import FullHeader from "components/layout/full-header";
import { useAuth } from "lib/auth";
import React from "react";

const Welcome = () => {
  const { user, signout } = useAuth();
  return (
    <FullHeader>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl text-center font-extrabold text-slate-900">
            Hi, {user.name}!
          </h2>
          <p className="mt-3 text-sm text-center text-slate-500">
            You&apos;re logged in. Well done!
          </p>
        </div>
        <Button className="w-full mt-6" onClick={() => signout()}>
          Log out
        </Button>
      </div>
    </FullHeader>
  );
};

export default Welcome;
