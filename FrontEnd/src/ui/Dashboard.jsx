import Button from "./Button";

export default function Dashboard() {
  return (
    <div className="space-y-6 p-1 bg-[#f3f8ff]">
      {/* Chat Bot Card */}
      <div className="border p-2 border-red-300 rounded-xl shadow-sm">
        <div className="bg-red-100 p-4 rounded-xl min-h-[220px] flex flex-col justify-between">
          <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-4">
            Edu Genie Chat Bot
          </h2>
          <p className="text-center text-lg text-gray-800 mb-2">
            Hi! <br /> <strong>Pavan.D</strong>
          </p>
          <div className="flex justify-center">
            <Button text="click here to start a chat" />
          </div>
        </div>
      </div>

      {/* Upload Document */}
      <div className="border border-yellow-400 rounded-xl p-2">
        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg flex items-center gap-3 text-lg font-medium text-gray-800">
          <span className="text-2xl">↓</span>
          Upload your document
        </div>
      </div>

      {/* Right section (Uploads and Stats) */}
      <div className="grid grid-cols-3 gap-4">
        {/* Recent Uploads */}
        <div className="border border-blue-800 bg-blue-900 text-white p-4 rounded-xl col-span-1">
          <h3 className="font-bold text-lg mb-3 border-b border-white pb-1">
            Recent Uploads
          </h3>
          <ul className="text-sm space-y-3">
            <li>
              <strong>1st SEM</strong> <br />
              <span className="text-xs">Today, 10:30 AM</span>
            </li>
            <li>
              <strong>2nd SEM</strong> <br />
              <span className="text-xs">Today, 10:00 AM</span>
            </li>
            <li>
              <strong>3rd SEM</strong> <br />
              <span className="text-xs">Yesterday, 01:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Stats */}
        <div className="col-span-2 flex gap-4">
          <div className="bg-yellow-300 flex-1 p-6 rounded-xl border border-yellow-500 flex flex-col items-center justify-center">
            <p className="font-semibold text-blue-900 text-lg">Day Streak</p>
            <h1 className="text-5xl font-extrabold text-blue-900 mt-2">07</h1>
          </div>
          <div className="bg-red-200 flex-1 p-6 rounded-xl border border-red-400 flex flex-col items-center justify-center">
            <p className="font-semibold text-red-900 text-lg">
              Documents Uploaded
            </p>
            <h1 className="text-5xl font-extrabold text-red-900 mt-2">10</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
