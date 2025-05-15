import { useMutation } from "@tanstack/react-query";
import { authenticateUser } from "../../utils/apiAuth";
import toast from "react-hot-toast";

export default function useLogin() {
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: (data) => authenticateUser(data),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoading };
}
