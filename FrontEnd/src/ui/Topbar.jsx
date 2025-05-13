export default function Topbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white border-b">
      <div className="text-xl text-gray-600 font-medium">{today}</div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end text-right">
          <span className="font-semibold text-base">Pavan.D</span>
          <span className="text-sm text-gray-500">Student</span>
        </div>
        <img
          src="image.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover  "
        />
      </div>
    </header>
  );
}