import { LayoutDashboard, User, Bot } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white/60 backdrop-blur-xl border-r p-4 flex flex-col items-center transition-all duration-300">
      {/* Logo Image */}
      <img
        src="/image.png"
        alt="EduGenie Logo"
        className="w-24 h-24 mb-4 mt-4 object-contain"
      />

      {/* Title */}
      <div className="text-4xl text-[#0B235E] font-extrabold mb-8">
        EduGenie
      </div>

      {/* Navigation */}
      <nav className="space-y-3 w-full">
        <SidebarButton
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          active
        />
        <SidebarButton icon={<User className="w-5 h-5" />} label="Profile" />
        <SidebarButton icon={<Bot className="w-5 h-5" />} label="Chat Bot" />
      </nav>
    </div>
  );
}

// Modular Button Component
function SidebarButton({ icon, label, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-2 rounded-md border-2 transition-all duration-200 font-medium
        ${
          active
            ? "bg-[#1C398E] text-white border-blue-700 shadow-md"
            : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-400 active:bg-blue-100"
        }
      `}
    >
      {icon}
      {label}
    </a>
  );
}
