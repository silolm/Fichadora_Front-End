import useAuth from "./useAuth";
import useClockInOutService from "../services/useClockInOutService";
import { useContext } from "react";
import { ClockInOutContext } from "../providers/clockInOutProvider";
import { formatter } from "../utils/formatter";

export default function useClockInOut() {
  const { DNI } = useAuth();
  const { clockInOut, setClockInOut } = useContext(ClockInOutContext);
  const { get, setClock, updateClock } = useClockInOutService();

  async function clockIn() {
    const { id } = await setClock(DNI, new Date());
    const lastClock = await get(id);
    if (setClockInOut) setClockInOut(lastClock);
  }

  function clockOut() {
    if (!clockInOut) return;

    // @ts-ignore
    updateClock(clockInOut.id, {
      ...clockInOut, out: formatter(new Date())
    });
  }

  function pauseIn() {
    if (!clockInOut) return;

    // @ts-ignore
    updateClock(clockInOut.id, {
      ...clockInOut, pauseIn: formatter(new Date())
    });
  }

  function pauseOut() {
    if (!clockInOut) return;

    // @ts-ignore
    updateClock(clockInOut.id, {
      ...clockInOut, pauseOut: formatter(new Date())
    });
  }

  return {
    clockInOut, clockIn, clockOut, pauseIn, pauseOut
  };
}

