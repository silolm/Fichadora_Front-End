export function formatter(time: Date) {
  time = new Date(time.getTime() - 3000000);
  let date_format_str = time.getFullYear().toString() + "-"
      + ((time.getMonth() + 1).toString().length === 2 ? (time.getMonth() + 1).toString() : "0"
      + (time.getMonth() + 1).toString()) + "-"
      + (time.getDate().toString().length === 2 ? time.getDate().toString() : "0"
      + time.getDate().toString()) + " "
      + (time.getHours().toString().length === 2 ? time.getHours().toString() : "0"
      + time.getHours().toString()) + ":"
      + ((parseInt(String(time.getMinutes() / 5)) * 5).toString().length === 2 ? (parseInt(String(time.getMinutes() / 5)) * 5).toString() : "0"
      + (parseInt(String(time.getMinutes() / 5)) * 5).toString()) + ":00";
  return(date_format_str);
}