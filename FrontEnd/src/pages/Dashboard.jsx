import App from "../App";
import Sidebar from "../ui/Sidebar";
import Topbar from "../ui/Topbar";
import Footer from "../ui/Footer";
import StudentDashboard from "../ui/StudentDashboard";

export default function Dashboard() {
  return (
    <div class="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div class="flex flex-col flex-1 bg-white-50 min-h-screen">
        <Topbar />
        <main class="p-6 overflow-y-auto">
          <StudentDashboard />
        </main>
        <Footer />
      </div>
    </div>
  );
}
