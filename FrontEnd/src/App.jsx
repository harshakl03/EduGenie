// import Button form './ui/Button';
import Sidebar from "./ui/Sidebar";
import Topbar from "./ui/Topbar";
import Footer from "./ui/Footer";
import Dashboard from "./ui/Dashboard";
import TeacherDashboard from "./pages/TeacherDashboard";

function App() {
  return (
    <div class="flex h-screen bg-gray-50">
      <Sidebar />
      <div class="flex flex-col flex-1 bg-white-50">
        <Topbar />
        <main class="p-6 overflow-y-auto">
          <TeacherDashboard />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
