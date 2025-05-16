import { useState } from "react";
import { LayoutDashboard, User, Bot } from "lucide-react";
import { useNavigate } from "react-router";
import useLoginData from "../features/Login/useLoginData";
import PageLoader from "./PageLoader";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();
  const { data, isLoading } = useLoginData();

  if (isLoading) return <PageLoader type="read" />;
  return (
    <div className="w-60 bg-white backdrop-blur-xl border-r p-4 flex flex-col items-center transition-all duration-300">
      {/* Logo Image */}
      <img
        src="/image.png"
        alt="EduGenie Logo"
        className="w-24 h-24 mb-4 mt-4 object-contain"
      />

      {/* Title */}
      <div className="text-3xl text-[#0B235E] font-extrabold mb-8">
        EduGenie
      </div>

      {/* Navigation */}
      <nav className="space-y-3 w-full">
        <SidebarButton
          icon={LayoutDashboard}
          label="Dashboard"
          isActive={activeTab === "Dashboard"}
          onClick={() => setActiveTab("Dashboard")}
        />
        <SidebarButton
          icon={User}
          label="Profile"
          isActive={activeTab === "Profile"}
          onClick={() => navigate(`/user/profile/${data.username}`)}
        />
        <SidebarButton
          icon={Bot}
          label="Chat Bot"
          isActive={activeTab === "Chat Bot"}
          onClick={() => setActiveTab("Chat Bot")}
        />
      </nav>
    </div>
  );
}

// Modular Button Component
function SidebarButton({ icon: Icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 w-full rounded-md border-2 transition-all duration-200 font-medium
        ${
          isActive
            ? "bg-[#1C398E] text-white border-[#1C398E]"
            : "bg-white text-[#1C398E] border-[#1C398E] hover:bg-[#1C398E] hover:text-white"
        }
      `}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );
}
