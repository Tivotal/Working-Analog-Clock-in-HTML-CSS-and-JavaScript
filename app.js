/* Created by Tivotal */

(function () {
  //getting current time
  let time = new Date(),
    second = (time.getSeconds() / 60) * 360,
    minute = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6,
    hour = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30,
    //animation function using keyframes
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

  //inserting animation code into style tag in the html file
  document.querySelector("#clock-animation").innerHTML = animation;
})();
