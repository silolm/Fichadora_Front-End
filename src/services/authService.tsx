async function login(nickname: String, password: String): Promise<false | string> {
  const url = "http://localhost:3000";

  const result = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      DNI: nickname,
      password: password
    })
  });

  if (result.ok) {
    const data = await result.json();
    if (data.token) return data.token;
  }

  return false;
}

export default { login: login };