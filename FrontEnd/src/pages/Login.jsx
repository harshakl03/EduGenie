import Button from "../ui/Button";
import Field from "../ui/Field";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Image Section (Top on mobile, right on desktop) */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <img src="/image.png" alt="EduGenie" className="w-3/4 h-auto" />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-6 md:px-20 pb-10 md:pb-0">
        <h1 className="text-5xl font-extrabold  text-[#1A237E] mb-3 ">
          EduGenie
        </h1>
        <h2 className="text-2xl font-semibold text-[#1A237E] mb-6">
          Welcome Back
        </h2>

        <form className="w-full max-w-sm">
          <Field
            type="email"
            placeholder="Example@email.com"
            text="Email"
            to="login"
          />

          <Field
            type="password"
            placeholder="at least 8 characters"
            text="Password"
            to="login"
          />

          <div className="flex justify-end mb-6">
            <a href="#" className="text-sm text-blue-700 hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button text="Sign in" type="primary" />

          <p className="text-sm text-center text-[#1A237E] mt-6">
            Don't you have an account?{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
