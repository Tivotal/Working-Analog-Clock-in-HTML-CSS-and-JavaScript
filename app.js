/* Created by Tivotal */

(function () {
  let time = new Date(), //we get this time from our pc time not from server
    second = (time.getSeconds() / 60) * 360,
    minute = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6,
    hour = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30,
    animation = [
      "@keyframes secAnim{from{transform: rotate(" +
        second +
        "deg);}to{transform: rotate(" +
        (second + 360) +
        "deg);}}",
      "@keyframes minAnim{from{transform: rotate(" +
        minute +
        "deg);}to{transform: rotate(" +
        (minute + 360) +
        "deg);}}",
      "@keyframes hrAnim{from{transform: rotate(" +
        hour +
        "deg);}to{transform: rotate(" +
        (hour + 360) +
        "deg);}}",
    ].join("");

  document.querySelector("#clock-animation").innerHTML = animation;
})();
