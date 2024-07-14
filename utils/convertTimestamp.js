function toHhMm(timeStamp) {
  let fullDate = new Date(timeStamp);
  let hour = fullDate.getHours();
  let paddedHour = hour.toString().padStart(2, '0');
  let minute = fullDate.getMinutes();
  let paddedMinute = minute.toString().padStart(2, '0');
  return `${paddedHour}:${paddedMinute}`;
}

export default toHhMm;
