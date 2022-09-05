import { Button } from "components/common/button";
import OtpInput from "components/common/opt-input";
import FullHeader from "components/layout/full-header";
import { useAuth } from "lib/auth";
import React, { useEffect, useState } from "react";

const OtpAuth = () => {
  const [retriesIn, setRetriesIn] = useState(2);

  const { user, verifyAccount, loading } = useAuth();
  let redactedEmail = "";
  let [name, provider] = user.email.split("@");
  name =
    name.length > 5 ? name.slice(0, 5) + "*".repeat(name.length - 5) : name;
  redactedEmail = `${name}@${provider}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setRetriesIn((retriesIn) => retriesIn - 1);
    }, 1000);

    if (retriesIn < 0) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [retriesIn]);

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
                {retriesIn > 0 ? (
                  <>
                    Resend code in{" "}
                    <span className="font-extrabold text-slate-700">{`${retriesIn}:00`}</span>
                  </>
                ) : (
                  "Send again"
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </FullHeader>
  );
};

export default OtpAuth;
