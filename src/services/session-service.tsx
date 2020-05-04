let token = undefined;

async function login(nickname: String, password: String): Promise<boolean> {
  const url = "http://192.168.0.146:3000";
  //const url = "http://localhost:3000";

  const result = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      DNI: nickname,
      password: password
    })
  });

  if (result.ok){
    const data = await result.json()

    if (data.token) {
      token = data.token
      return true;
    }
  }
  return false;

}

export default { login: login };