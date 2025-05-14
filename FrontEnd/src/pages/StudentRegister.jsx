import Button from "../ui/Button";
import Field from "../ui/Field";

export default function StudentRegistration() {
  return (
    <div className="flex flex-col md:flex-row h-full min-h-screen w-full bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between items-center pt-8 md:pt-32 px-4 order-1">
        <img src="/image.png" alt="EduGenie" className="w-3/4 h-auto" />
        <h2 className="text-5xl font-extrabold text-[#1A237E] mt-4 md:hidden">
          Edu Genie
        </h2>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-10 order-2">
        <h1 className="text-3xl font-bold text-[#1A237E] mb-8 hidden md:block">
          Welcome to Edu Genie
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          <div>
            <Field text="Full Name" type="text" placeholder="Pavan.D" />
          </div>
          <div>
            <Field text="Username" type="text" placeholder="@pav6n" />
          </div>
          <div>
            <Field text="DOB" type="date" />
          </div>
          <div>
            <Field
              text="Password"
              type="password"
              placeholder="at least 8 characters"
            />
          </div>
          <div>
            <Field type="text" text="Course" placeholder="ex. Data Science" />
          </div>
          <div>
            <Field
              text="Confirm Password"
              type="password"
              placeholder="at least 8 characters"
            />
          </div>
          <div>
            <Field
              text="Phone Number"
              type="text"
              placeholder="ex. +91 2345678912"
            />
          </div>
          <div>
            <Field
              text="Address"
              type="text"
              placeholder="ex. Door No. 123...."
            />
          </div>
          <div>
            <Field text="City" type="text" placeholder="Bangalore" />
          </div>
          <div>
            <Field text="State" type="text" placeholder="Karnataka" />
          </div>
          <div className="md:col-span-2">
            <Field text="Country" type="text" placeholder="India" />
          </div>
          <div className="md:col-span-2">
            <Button text="Create an account" type="primary" />
          </div>
          <div className="md:col-span-2 text-center text-sm">
            Already have an account?
            <a href="#" className="text-blue-700 hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
