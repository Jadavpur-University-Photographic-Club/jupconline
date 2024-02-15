const countdown = () => {
    // const countDate = new Date().getTime();
    const countDate = new Date("May 22, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
  
    document.querySelector(".day-text").innerText = textDay;
    document.querySelector(".hour-text").innerText = textHour;
    document.querySelector(".minute-text").innerText = textMinute;
      document.querySelector(".second-text").innerText = textSecond;
      progress(textDay)
      
  };
  
  const progress = (daysLeft) => {
      const totalDays = 20
      const progressBar = document.querySelector(".myprogressBar")
      const progressBarWidth = progressBar.parentNode.offsetWidth;
      var progressPercentage = ((totalDays - daysLeft) / totalDays) * 100;
      const progressWidth = (progressBarWidth * progressPercentage) / 100;
      progressBar.style.width = progressWidth + "px";
      console.log(progressPercentage, progressWidth)
  
      const icon = document.querySelector(".icon-image")
      switch (Math.floor(progressPercentage / 25)) {
          case 0:
            icon.src = 'assets/seed.png';
            break;
          case 1:
            icon.src = 'assets/sprout.png';
            break;
          case 2:
            icon.src = 'assets/tree.png';
            break;
          case 3:
            icon.src = 'assets/planet-earth.png';
            break;
          default:
            icon.src = 'assets/planet-earth.png';
        }
  };
  
  setInterval(countdown, 1000);


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

  
