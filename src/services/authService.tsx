async function login(nickname: String, password: String): Promise<false | string> {
  const url = "http://192.168.0.146:3001";
  //const url = "http://localhost:3001";

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