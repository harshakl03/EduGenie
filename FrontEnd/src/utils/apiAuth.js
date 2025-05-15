export async function authenticateUser({ username, password }) {
  const res = await fetch("http://localhost:3000/api/user/login", {
    method: "POST",
    body: JSON.stringify({username, password}),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  })

  const data = await res.json();
  if(data.error) throw new Error(data.message)
  return data;
};