import useAuth from "../myHooks/useAuth";

function useClockInOutService() {
  const { token } = useAuth();

  async function setClock(employee: String, checkIn: Date): Promise<{ id: string }> {
    const url = `http://mario.vozfusion.es/clockInOut`;

    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": token,
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
    return result.json();
  }

  async function updateClock(content: any): Promise<void> {
    const url = `http://mario.vozfusion.es/clockInOut/`;

    const result = await fetch(url, {
      method: "PUT",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    });

    if (!result.ok) {
      throw result.status;
    }
  }

  const get = async (employee ?: string) => {
    const url = `http://mario.vozfusion.es/clockInOut${employee ? "?employee=" + employee : ""}`;

    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": token
      }
    });

    return result.json();
  };
  return { setClock: setClock, updateClock: updateClock, get: get };
}

export default useClockInOutService;