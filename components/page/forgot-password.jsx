import { Button } from "components/common/button";
import { TextField } from "components/common/text-field";
import FullHeader from "components/layout/full-header";
import { useAuth } from "lib/auth";
import React from "react";

const ForgotPassword = () => {
  const { verifyAccount, loading } = useAuth();
  return (
    <FullHeader>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl text-center font-extrabold text-slate-900">
            Need help with your account?
          </h2>
          <p className="mt-3 text-sm text-center text-slate-500">
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </p>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifyAccount("/verify-otp");
            }}
          >
            <div>
              <TextField
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Username or email"
                required
              />
            </div>
            <div className="mt-6">
              <Button className="w-full" isLoading={loading} type="submit">
                Send Link
              </Button>
              <div className="w-full mt-4 text-center">
                <a
                  href="#"
                  className="font-extrabold text-slate-700 hover:text-slate-600"
                >
                  Forgot your email?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FullHeader>
  );
};

export default ForgotPassword;
