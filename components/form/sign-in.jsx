import { Button } from "components/common/button";
import { TextField } from "components/common/text-field";
import { useAuth } from "lib/auth";
import Link from "next/link";

const SignInForm = () => {
  const { signin, loading } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }

    signin(data["email"], data["password"], "/verify-otp");
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
          <Link href="/forgot-password">
            <a className="font-semibold text-brand-500 hover:text-brand-600">
              Forgot password?
            </a>
          </Link>
        </div>
      </div>

      <div>
        <Button
          size="medium"
          className="w-full"
          type="submit"
          isLoading={loading}
        >
          Sign in
        </Button>
      </div>
      <div>
        <div className="w-full text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up">
            <a className="font-extrabold text-slate-700">Sign Up</a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
