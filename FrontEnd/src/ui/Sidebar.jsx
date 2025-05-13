import { LayoutDashboard, User, Bot } from "lucide-react";

export default function Sidebar() {
  return (
    <div class="w-64 bg-white border-r p-2 flex flex-col items-center">
      {/* Logo Image */}
      <img src="/image.png" alt="EduGenie Logo" class="w-30 h-30 mb-4 mt-4" />

      {/* Title */}
      <div class="text-4xl text-[#1447E6] font-bold mb-8">EduGenie</div>

      {/* Navigation */}
      <nav class="space-y-3 min-w-full">
        <a
          href="#"
          class="flex items-center text-l  text-white bg-[#1C398E] gap-2 shadow-blue-500 font-medium border-2 p-2 rounded-md"
        >
          <LayoutDashboard class="w-8 h-5" />
          Dashboard
        </a>
        <a href="#" class="flex items-center gap-2 border-2 p-2 rounded-md">
          <User class="w-8 h-5" />
          Profile
        </a>
        <a href="#" class="flex items-center gap-2 border-2 p-2 rounded-md">
          <Bot class="w-8 h-5" />
          Chat Bot
        </a>
      </nav>
    </div>
  );
}
