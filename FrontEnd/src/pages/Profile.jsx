import StudentProfile from "../ui/StudentProfile";
import useLoginData from "../features/Login/useLoginData";
import PageLoader from "../ui/PageLoader";
import Sidebar from "../ui/Sidebar";
import Topbar from "../ui/Topbar";

export default function Profile() {
  const { data, isLoading } = useLoginData();
  if (isLoading) return <PageLoader type="show" />;
  return data.level === 1 ? <StudentProfile /> : <div>Teacher Profile</div>;
}
