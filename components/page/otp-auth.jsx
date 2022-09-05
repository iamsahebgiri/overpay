import { Button } from "components/common/button";
import OtpInput from "components/common/opt-input";
import FullHeader from "components/layout/full-header";
import React from "react";

const OtpAuth = () => {
  return (
    <FullHeader>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl text-center font-extrabold text-slate-900">
            Verify your email
          </h2>
          <p className="mt-3 text-sm text-center text-slate-500">
            We have sent code to your email
          </p>
          <p className="text-sm font-medium text-center text-slate-800">
            alesiaka******@mail.com
          </p>
        </div>
        <div>
          <form action="#" method="POST">
            <div>
              <OtpInput />
            </div>
          </form>
        </div>
        <div>
          <Button className="w-full">Verify Account</Button>
          <div className="w-full mt-4 text-center">
            Resend code in{" "}
            <span className="font-extrabold text-slate-700">59:00</span>
          </div>
        </div>
      </div>
    </FullHeader>
  );
};

export default OtpAuth;
