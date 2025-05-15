import App from "../App";
import Sidebar from "../ui/Sidebar";
import Topbar from "../ui/Topbar";
import Footer from "../ui/Footer";
import StudentDashboard from "../ui/StudentDashboard";
import TeacherDashboard from "../ui/TeacherDashboard";
import useLoginData from "../features/Login/useLoginData";
import PageLoader from "../ui/PageLoader";

export default function Dashboard() {
  const { data, isLoading } = useLoginData();
  if (isLoading) return <PageLoader type="show" />;
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-white-50 min-h-screen">
        <Topbar />
        <main className="p-6 overflow-y-auto">
          {data.level === 1 ? <StudentDashboard /> : <TeacherDashboard />}
        </main>
        <Footer />
      </div>
    </div>
  );
}
