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
    const allClock = await get(DNI);
    const lastClock = allClock[allClock.length - 1];
    Object.keys(lastClock).forEach((key: any) => lastClock[key] = lastClock[key] === "" ? null : lastClock[key]);
    if (setClockInOut) setClockInOut(lastClock);
  }

  function clockOut() {
    if (!clockInOut) return;

    updateClock({
      ...clockInOut, out: formatter(new Date())
    });
  }

  function pauseIn() {
    if (!clockInOut) return;

    updateClock({
      ...clockInOut, pauseIn: formatter(new Date())
    });
  }

  function pauseOut() {
    if (!clockInOut) return;

    updateClock({
      ...clockInOut, pauseOut: formatter(new Date())
    });
  }

  return {
    clockInOut, clockIn, clockOut, pauseIn, pauseOut
  };
}

