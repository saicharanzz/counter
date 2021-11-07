const Days = document.querySelectorAll('Days');
const Hours = document.querySelectorAll('Hours');
const Minutes = document.querySelectorAll('Minutes');
const Seconds = document.querySelectorAll('Seconds');



const currentyear = new Date().getFullYear();

const NewYearCountdownTimer = m=new Date('January 1{currentyear + 1} 00:00:00');





function updateNewYearCountdownTimer(){
    const currentyear = new Date();
    const diff = NewYearCountdownTimer - currentyear;
    const d = Math.floor(diff / 1000/ 60 / 60 / 24);
    const h = Math.floor(diff / 1000/ 60 / 60) % 24;
    const m = Math.floor(diff / 1000/ 60 ) % 24;
    const s = Math.floor(diff / 1000)% 60;

     Days.innerHTML=d;
     Hours.innerHTML= h < 10 ? '0' = h : h;
     Minutes.innerHTML = m  < 10 ? '0' = m : m;
     Seconds.innerHTML= s <   10 ? '0' = s : s;

}

 setInterval(updateNewYearCountdownTimer, 1000);
 