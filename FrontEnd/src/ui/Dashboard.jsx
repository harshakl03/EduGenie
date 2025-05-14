import { FaDownload } from "react-icons/fa";

export default function DashboardMain() {
  return (
    <div className="w-full px-10 py-6 flex flex-col gap-6">
      {/* Top Row */}
      <div className="flex justify-between items-start flex-wrap gap-6">
        {/* Chat Bot Card */}
        <div className="flex-1 min-w-[300px] bg-white border border-blue-200 rounded-xl shadow-md p-5">
          <h2 className="text-2xl font-extrabold text-center text-blue-900 mb-4">
            Edu Genie Chat Bot
          </h2>
          <div className="bg-red-100 border border-red-300 rounded-xl p-6 text-center mb-4">
            <p className="text-lg font-medium mb-2">
              Hi! <br /> Pavan.D
            </p>
            <button className="w-full bg-gray-100 text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition">
              click here to start a chat
            </button>
          </div>

          {/* Upload Button */}
          <button className="w-full bg-yellow-100 border border-yellow-300 hover:bg-yellow-200 text-black font-semibold text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition">
            <FaDownload className="text-xl" />
            Upload your document
          </button>
        </div>

        {/* Recent Uploads */}
        <div className="min-w-[240px] bg-[#0D1B4C] text-white rounded-xl p-4 shadow-md flex-1 max-w-[260px]">
          <h3 className="text-lg font-bold mb-4">Recent Uploads</h3>
          <ul className="text-sm space-y-3">
            <li>
              <div className="flex justify-between">
                <span>1st SEM</span>
                <span>Today, 10:30 AM</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>2nd SEM</span>
                <span>Today, 10:00 AM</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>3rd SEM</span>
                <span>Yesterday, 01:00 PM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-6">
        <div className="flex-1 bg-yellow-100 border border-yellow-300 rounded-xl p-6 text-center shadow">
          <h4 className="text-md font-medium text-gray-800 mb-2">Day Streak</h4>
          <p className="text-3xl font-bold text-yellow-700">07</p>
        </div>
        <div className="flex-1 bg-red-100 border border-red-300 rounded-xl p-6 text-center shadow">
          <h4 className="text-md font-medium text-gray-800 mb-2">
            Documents Uploaded
          </h4>
          <p className="text-3xl font-bold text-red-600">10</p>
        </div>
      </div>
    </div>
  );
}
