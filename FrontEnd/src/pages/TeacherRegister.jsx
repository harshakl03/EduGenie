import Button from "../ui/Button";

export default function TeacherRegistration() {
  return (
    <div className="flex flex-col md:flex-row h-full min-h-screen w-full bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between items-center pt-8 md:pt-32 px-6 order-1">
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

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Pavan.D"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="@pav6n"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-[#1A237E] font-medium mb-1">DOB</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-500"
            />
          </div>
          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="at least 8 characters"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Department
            </label>
            <input
              type="text"
              placeholder="ex. Computer Science"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="at least 8 characters"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Designation
            </label>
            <input
              type="text"
              placeholder="ex. Assistant Professor"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="ex. +91 2345678912"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="ex. Door No. 123...."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              City
            </label>
            <input
              type="text"
              placeholder="Bangalore"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              State
            </label>
            <input
              type="text"
              placeholder="karnataka"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-[#1A237E] font-medium mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="India"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="md:col-span-2">
            {/* <button
              type="submit"
              className="w-full bg-[#0D1B4C] text-white py-3 rounded-lg font-semibold hover:bg-[#1A237E] transition"
            >
              Create an account
            </button> */}

            <Button text="Create an account" type="primary" />
          </div>

          <div className="md:col-span-2 text-center text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
