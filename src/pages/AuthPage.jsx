import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthPage = ({ type }) => {
  return (
    <main className="bg-hero-pattern font-neuemon bg-white dark:bg-bgDark2">
      <section className=" min-h-dvh w-full flexCenter p-3">
        <div className="bg-[#000000]/90 border border-line/60 text-white flexCenter gap-32 px-6 py-10 lg:p-3 rounded-[10px] md:rounded-[20px]">
          <div className="w-[420px] hidden lg:block">
            {type === "signIn" ? (
              <img
                src="/images/auth-image.jpg"
                alt=""
                className="object-cover rounded-[12px]"
              />
            ) : (
              <img
                src="/images/auth-image.jpg"
                alt=""
                className="object-cover rounded-[12px]"
              />
            )}
          </div>
          <div className="flex flex-col gap-8 max-w-[550px] md:w-[550px]">
            <div className="flex flex-col gap-4">
              <p className="text-xl md:text-3xl font-neuemon font-medium hero-head ">
                {type === "signIn"
                  ? "Sign in to your account"
                  : "Create your account"}
              </p>
              <p className="text-xs md:text-sm text-white/50 max-w-[450px]">
                {type === "signIn"
                  ? "Join a network of traders to unlock premium resource tailored for you"
                  : "Join a network of traders to unlock premium resource tailored for you"}
              </p>
            </div>

            <form
              className="flex flex-col gap-8 max-w-[400px]"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted!");
              }}
            >
              {type === "signUp" && (
                <div className="flex flex-col gap-[10px]">
                  <label
                    htmlFor="email"
                    className="text-xs md:text-sm font-monasan font-thin"
                  >
                    Full name*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="input"
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs md:text-sm  font-monasan font-thin "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input"
                />
              </div>

              {type === "signUp" ? (
                <div className="flex flex-col md:flex-row md:justify-stretch items-start gap-8 md:gap-2 w-full md:w-[400px]">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="password"
                      className="text-xs md:text-sm  font-monasan font-thin"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="input "
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="confirmPassword"
                      className="text-xs md:text-sm  font-monasan font-thin"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      className="input "
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="text-xs md:text-sm  font-monasan font-thin"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="input"
                  />
                </div>
              )}
              <Link to='/pricing' className="w-full">
                <button
                  type="submit"
                  className="bg-brand text-white w-full md:px-[15px] py-2 md:py-[11px] text-base rounded-[10px] font-monasan font-medium"
                >
                  {type === "signIn" ? "Sign in" : "Create account"}
                </button>
              </Link>
            </form>

            <p className="text-xs md:text-sm  text-white/50 max-w-[450px]">
              Don&apos;t have an account?
              {type === "signIn" ? (
                <Link to="/signUp" className="text-brand px-2 font-medium">
                  sign up
                </Link>
              ) : (
                <Link to="/signIn" className="text-brand  px-2 font-medium">
                  sign in
                </Link>
              )}
            </p>
            {type === "signUp" && (
              <p className="text-xs md:text-sm  text-white/50 max-w-[400px]">
                By creating an account you agree to our
                <Link to="/"> terms of services</Link> and{" "}
                <Link to="/">privacy policy</Link>
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

// Define the prop types for the AuthPage component
AuthPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthPage;
