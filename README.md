# Mathongo

## Getting Started

First, run the development server:

```bash
# install all dependencies
npm i


npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Default Credential

```js
const DEFAULT_USER = {
  name: "John Doe",
  email: "johndoe@mail.com",
  password: "password",
};
```

## Enpoints

- [Sign Up](https://overpay-iota.vercel.app/sign-up)
- [Sign In](https://overpay-iota.vercel.app/sign-in)
- [Verify OTP](https://overpay-iota.vercel.app/verify-otp)
- [Forgot Password](https://overpay-iota.vercel.app/forgot-password)
- [Welcome](https://overpay-iota.vercel.app/welcome)

## User flow

- Initially user signs up by entering required credentials such as name, email, password.
- On Successfull registration, user is sent to log in page where on entering correct credentials, user is taken to verify OTP page where users enter OTP.
- On Successfull attempts user is allowed to visit welcome page.

---

- If users forgot password, an email has to be entered and then otp will be sent to the email. After which user enters the OTP and greeted with welcome message.
