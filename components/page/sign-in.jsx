import { ButtonLink } from "components/common/button-link";
import Carousel from "components/common/carousel";
import { Google, Overpay } from "components/common/logo";
import SignInForm from "components/form/sign-in";
import { Footer } from "components/layout/footer";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-between py-6 px-4 sm:px-6">
        <Link href="/">
          <a>
            <Overpay />
          </a>
        </Link>
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
              <SignInForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <Carousel />
      </div>
    </div>
  );
};

export default SignIn;
