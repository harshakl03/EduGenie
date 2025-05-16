import { useNavigate } from "react-router";
import { logOutUser } from "../../utils/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useLogout() {
  const query = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: () => logOutUser(),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/");
      query.setQueryData(["login"], data);
    },
  });
  return { logout, isLoading };
}
