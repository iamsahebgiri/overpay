import { Button } from "components/common/button";
import { TextField } from "components/common/text-field";
import { useAuth } from "lib/auth";
import Link from "next/link";

const SignUpForm = () => {
  const { signup, loading } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }

    signup(
      `${data["first-name"]} ${data["last-name"]}`,
      data["email"],
      data["password"],
      "/sign-in"
    );
  };
  return (
    <form className="grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
      <div className="col-span-6 sm:col-span-3 ">
        <TextField
          id="first-name"
          name="first-name"
          autoComplete="given-name"
          placeholder="First name"
          required
        />
      </div>
      <div className="col-span-6 sm:col-span-3 ">
        <TextField
          id="last-name"
          name="last-name"
          autoComplete="family-name"
          placeholder="Last name"
          required
        />
      </div>

      <div className="col-span-6">
        <TextField
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          required
        />
      </div>

      <div className="col-span-6">
        <TextField
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          required
        />
      </div>

      <div className="col-span-6">
        <p className="text-sm text-slate-500">
          By creating an account, you agreeing to our{" "}
          <a
            href="https://github.com/iamsahebgiri"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-slate-700"
          >
            Privacy Policy
          </a>
          , and{" "}
          <a
            href="https://github.com/iamsahebgiri"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-slate-700"
          >
            Electronics Communication Policy.
          </a>
        </p>
      </div>

      <div className="col-span-6">
        <Button
          size="medium"
          className="w-full"
          type="submit"
          isLoading={loading}
        >
          Sign Up
        </Button>
      </div>
      <div className="col-span-6">
        <div className="w-full text-center">
          Already have an account?{" "}
          <Link href="/sign-in">
            <a className="font-extrabold text-slate-700">Sign In</a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
