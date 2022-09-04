import { Button } from "components/common/button";
import { ButtonLink } from "components/common/button-link";
import { Google, Overpay } from "components/common/logo";
import { TextField } from "components/common/text-field";
import { Footer } from "./footer";

export default function SplitScreen() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex-1 flex flex-col justify-between py-6 px-4 sm:px-6">
          <Overpay />
          <div className="mx-auto w-full max-w-sm  lg:w-96">
            <div>
              <h2 className="text-3xl text-center font-extrabold text-slate-900">
                Sign in to Overpay
              </h2>
              <p className="mt-2 text-sm text-center text-slate-500">
                Send, spend and save smarter
              </p>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <div className="mt-1">
                    <ButtonLink href="#" variant="tertiary" className="w-full">
                      <Google className="w-5 h-5" />
                      <span className="ml-2">Sign in with Google</span>
                    </ButtonLink>
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-slate-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">
                      Or with email
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
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

                  <div className="space-y-1">
                    <TextField
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-s w-s text-brand-600 focus:ring-brand-500 border-slate-300 rounded-full"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block font-semibold text-sm text-slate-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-brand-500 hover:text-brand-600"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <Button size="medium" className="w-full">
                      Sign in
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="p-4 h-full">
            <div className="bg-brand-500 h-full">
              <div className="bg-pattern h-full bg-contain bg-center bg-no-repeat px-6 py-8 flex flex-col justify-center">
                <div className="py-8">
                  <img
                    src="/images/carousel/get-better-with-money.png"
                    alt="Get better with money"
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-4xl text-center font-extrabold text-white">
                  Get better with money
                </h3>
                <div className="max-w-lg mx-auto">
                  <p className="mt-2 text-sm text-center text-slate-300">
                    Overpay help you set saving goals, earn cash back offers, Go
                    to disclaimer for more details and get paychecks up to two
                    days early. Get a $20 bonus when you receive qualifying
                    direct deposits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
