import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authenticateUser } from "../../utils/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function useLogin() {
  const query = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: (data) => authenticateUser(data),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/user/dashboard");
      query.setQueryData(["login"], data);
    },
    onError: (error) => {
      toast.error(error.message);
      navigate("/auth/login");
    },
  });

  return { login, isLoading };
}
