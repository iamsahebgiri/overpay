<p align="center">
  <a href="https://github.com/iamsahebgiri/add-readme">
    <img alt="overpay" height="80" src="https://raw.githubusercontent.com/iamsahebgiri/add-readme/main/static/add-readme.png">
  </a>
</p>
<h1 align="center">overpay</h1>

<div align="center">
Sample frontend task for Mathongo.
</div>

<br />

<div align="center">
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Standard" />
  </a>
  
  <img src="https://img.shields.io/github/languages/code-size/iamsahebgiri/overpay?style=flat-square" alt="Code size" />

  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/iamsahebgiri/overpay?style=flat-square">

  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/iamsahebgiri/overpay?style=social">
</div>

## ⚡️ Introduction

Sample frontend task for Mathongo.

## ⚙️ Installation

Make sure you have [Node.js](https://nodejs.org/en/download/) installed.
Run this followed commands:

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Default Credential

```js
const DEFAULT_USER = {
  name: "John Doe",
  email: "johndoe@mail.com",
  password: "password",
};
```

## Endpoints

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

## ‍💻 Author

- [@iamsahebgiri](https://github.com/iamsahebgiri)

## ⭐️ Contribute

If you want to say thank you and/or support the active development of overpay:

1. Add a GitHub Star to the project.
2. Tweet about the project on your Twitter.
3. Write a review or tutorial on Medium, Dev.to or personal blog.
4. Support the project by donating a cup of coffee.

## 🧾 License

Copyright &copy; 2022 [Saheb Giri](https://github.com/iamsahebgiri).
