import StudentProfile from "../ui/StudentProfile";
import useLoginData from "../features/Login/useLoginData";
import PageLoader from "../ui/PageLoader";

export default function Profile() {
  const { data, isLoading } = useLoginData();
  if (isLoading) return <PageLoader type="show" />;
  if (data.level === 1) return <StudentProfile />;
  if (data.level === 2) return <div>Teacher Profile</div>;
}
