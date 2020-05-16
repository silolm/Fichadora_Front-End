async function setClock(employee: String, checkIn: Date): Promise<void> {
  const url = "http://192.168.0.146:3001/clockInOut";

  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      employee: employee,
      in: checkIn
    })
  });

  if (!result.ok) {
    throw result.status;
  }
}

async function updateClock(id: number, content: any): Promise<void> {
  const url = `http://192.168.0.146:3001/clockInOut?id=eq.${id}`;

  const result = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(content)
  });

  if (!result.ok) {
    throw result.status;
  }
}

export default { setClock: setClock, updateClock: updateClock };