import { Navigate, Outlet } from "react-router-dom";
import useLoginData from "../Login/useLoginData";
import PageLoader from "../../ui/PageLoader";

function UserRoutesProtector() {
  const { data, isLoading } = useLoginData();
  if (isLoading) return <PageLoader />;
  if (!data.error) return <Outlet />;
  return <Navigate to="/auth/login" />;
}

export default UserRoutesProtector;
