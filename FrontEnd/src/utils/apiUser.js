export async function getUserDatById(username) {
  const res = await fetch(
    `http://localhost:3000/api/user/getUserData/${username}`,
    {
      credentials: "include",
    }
  );
  const data = await res.json();
  if (data.error) throw new Error(data.message);
  return data;
}
