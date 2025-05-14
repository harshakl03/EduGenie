import { Bell } from "lucide-react"; // using lucide icons for clean SVGs

export default function Topbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-md flex justify-between items-center px-4 py-3 transition-all duration-300">
      <div className="text-lg text-gray-800 font-medium">{today}</div>

      <div className="flex items-center gap-4">
        <NotificationBell />
        <UserInfo name="Pavan.D" role="Student" imgSrc="/image.png" />
      </div>
    </header>
  );
}

// 🔔 Bell Icon Component
function NotificationBell() {
  return (
    <button className="relative text-gray-700 hover:text-black transition-colors">
      <Bell className="w-6 h-6" />
      {/* Notification dot (optional) */}
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  );
}

// 🧑 User Info Component
function UserInfo({ name, role, imgSrc }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-end text-right">
        <span className="font-semibold text-base text-gray-800">{name}</span>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
      <img
        src={imgSrc}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover border border-gray-300"
      />
    </div>
  );
}
