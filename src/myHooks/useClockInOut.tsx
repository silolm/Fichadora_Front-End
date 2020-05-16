import useAuth from "./useAuth";
import clockInOutService from "../services/clockInOutService";

function useClockInOut() {
  const { DNI } = useAuth();

  function clockIn() {
    clockInOutService.setClock(DNI, new Date);
  }

  function clockOut() {
    clockInOutService.updateClock(DNI, {
      out: new Date()
    });
  }
}