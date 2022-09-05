import { Button } from "components/common/button";
import OtpInput from "components/common/opt-input";
import FullHeader from "components/layout/full-header";
import { useAuth } from "lib/auth";
import React from "react";

const OtpAuth = () => {
  const { user, verifyAccount, retriesIn, loading } = useAuth();
  let redactedEmail = "";
  let [name, provider] = user.email.split("@");
  name =
    name.length > 5 ? name.slice(0, 5) + "*".repeat(name.length - 5) : name;
  redactedEmail = `${name}@${provider}`;
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
            {redactedEmail}
          </p>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifyAccount("/welcome");
            }}
          >
            <div>
              <OtpInput />
            </div>
            <div className="mt-6">
              <Button className="w-full" type="submit" isLoading={loading}>
                Verify Account
              </Button>
              <div className="w-full mt-4 text-center">
                Resend code in{" "}
                <span className="font-extrabold text-slate-700">{`${retriesIn}:00`}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FullHeader>
  );
};

export default OtpAuth;
