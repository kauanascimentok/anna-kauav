const music = document.getElementById("music");
const btn = document.getElementById("playMusic");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0;
    music.play();

    let vol = 0;
    const fadeIn = setInterval(() => {
      vol += 0.02;
      music.volume = Math.min(vol, 0.6);
      if (vol >= 0.6) clearInterval(fadeIn);
    }, 100);

    btn.textContent = "⏸ Pausar música";
  } else {
    music.pause();
    btn.textContent = "▶ Tocar música";
  }
});


/* Fade */
const fades=document.querySelectorAll(".fade");
const obs=new IntersectionObserver(e=>{
  e.forEach(i=>i.isIntersecting && i.target.classList.add("show"));
},{threshold:.3});
fades.forEach(f=>obs.observe(f));

/* Contador */
const startDate=new Date("2024-02-01T00:00:00");
function update(){
  const now=new Date();
  const diff=now-startDate;
  days.textContent=Math.floor(diff/86400000);
  hours.textContent=Math.floor(diff/3600000)%24;
  minutes.textContent=Math.floor(diff/60000)%60;
  seconds.textContent=Math.floor(diff/1000)%60;
}
setInterval(update,1000);update();

/* Surpresa */
const surprise=document.getElementById("surprise");
document.getElementById("surprise-btn").onclick=()=>surprise.style.display="flex";
document.getElementById("close-surprise").onclick=()=>surprise.style.display="none";

/* Segredo */
const inner=document.querySelector(".inner-secret");
document.querySelector(".secret").addEventListener("mousedown",()=>{
  setTimeout(()=>inner.classList.add("show"),3000);
});
