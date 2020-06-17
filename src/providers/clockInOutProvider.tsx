import React, { createContext, ReactNode, useState } from "react";
import { IClockInOut } from "../interfaces";

interface IClockInOutContext {
  clockInOut?: IClockInOut
  setClockInOut?: React.Dispatch<React.SetStateAction<IClockInOut | undefined>>
}

const initialState: IClockInOutContext = {};
export const ClockInOutContext = createContext(initialState);

interface IProps {
  children: ReactNode
}

export const ClockInOutProvider = ({ children }: IProps) => {
  const [clockInOut, setClockInOut] = useState<IClockInOut | undefined>(undefined);

  return (
    <ClockInOutContext.Provider value={{
      clockInOut: clockInOut, setClockInOut: setClockInOut
    }}>
      {children}
    </ClockInOutContext.Provider>
  );
};