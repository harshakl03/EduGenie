export default function Dashboard() {
  return (
    <div class="space-y-6">
      {/* Chat Bot Card */}
      <div class="bg-red-100 border border-red-300 p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-center mb-2">Edu Genie Chat Bot</h2>
        <p class="text-center text-lg">Hi! <br /> <strong>Pavan.D</strong></p>
        <button class="mt-4 mx-auto block bg-gray-100 border px-4 py-2 rounded font-bold">click here to start a chat</button>
      </div>

      {/* Upload Document */}
      <div class="bg-yellow-100 border border-yellow-300 p-6 rounded-lg flex items-center gap-2">
        <span class="text-xl">⬇</span>
        <span class="font-medium">Upload your document</span>
      </div>

      {/* Right section (Uploads and Stats) */}
      <div class="grid grid-cols-3 gap-4">
        {/* Recent Uploads */}
        <div class="bg-blue-900 text-white p-4 rounded-lg col-span-1">
          <h3 class="font-bold mb-2">Recent Uploads</h3>
          <ul class="text-sm space-y-1">
            <li>1st SEM – Today, 10:30 AM</li>
            <li>2nd SEM – Today, 10:00 AM</li>
            <li>3rd SEM – Yesterday, 01:00 PM</li>
          </ul>
        </div>

        {/* Stats */}
        <div class="col-span-2 flex gap-4">
          <div class="bg-yellow-300 text-center flex-1 p-4 rounded-lg">
            <p>Day Streak</p>
            <h1 class="text-3xl font-bold">07</h1>
          </div>
          <div class="bg-red-200 text-center flex-1 p-4 rounded-lg">
            <p>Documents Uploaded</p>
            <h1 class="text-3xl font-bold">10</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
