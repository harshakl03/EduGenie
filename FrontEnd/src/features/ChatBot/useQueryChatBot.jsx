import { useMutation } from "@tanstack/react-query";
import { queryChatBot } from "../../utils/apiChatBot";
export default function useQueryChatBot() {
  const { mutate: query, isPending: isLoading } = useMutation({
    mutationFn: (data) => queryChatBot(data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { query, isLoading };
}
