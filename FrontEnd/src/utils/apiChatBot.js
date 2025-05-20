export async function initializeChatBot(username) {
  const res = await fetch(
    `http://localhost:3000/api/PythonScripts/initializeStudentChatbot/${username}`,
    {
      credentials: "include",
    }
  );
  const data = await res.json();
  if (data.error) throw new error(data.message);
  return data;
}

export async function queryChatBot(query) {
  const res = await fetch(
    "http://localhost:3000/api/PythonScripts/studentChatbot",
    {
      body: JSON.stringify({
        query,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
    }
  );
  const data = await res.json();
  if (data.error) throw new error(data.message);
  return data;
}
