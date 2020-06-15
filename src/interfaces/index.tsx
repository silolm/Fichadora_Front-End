export interface IClockInOut {
  id: number
  DNI: string
  in: Date
  out?: Date
  pauseIn?: Date
  pauseOut?: Date
}