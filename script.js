function getTime() {
  const time = new Date();
  let hour = time.getHours().toString().padStart(2, 0);
  const meridian = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  hour = hour.toString().padStart(2, 0);

  const minute = time.getMinutes().toString().padStart(2, 0);
  const seconds = time.getSeconds().toString().padStart(2, 0);
  const updateTime = `${hour}:${minute}:${seconds}`;
  document.getElementById("clock").textContent = updateTime;
}
getTime();
setInterval(getTime,1000)
