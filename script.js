const countdown = () => {
    const countDate = new Date("Oct 30, 2023 00:00:00").getTime();
    const now =  new Date().getTime();
    const gap = countDate - now;



    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textSecond = Math.floor((gap % minute) /second)
    const textMinute = Math.floor((gap % hour) / minute)

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".min").innerText = textMinute;
    document.querySelector(".sec").innerText = textSecond;
};


setInterval(countdown,1000)