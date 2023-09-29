
const boxx=document.getElementById("card");
const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let randomchoice=()=>{let x=0
    while(x!=150){
    boxx.innerHTML+=chars.charAt(Math.floor(Math.random()*chars.length))
    x++
    }
    boxx.innerHTML+="<br>"
}
boxx.addEventListener("mousemove",()=>{
    randomchoice()
// window.scrollBy(0,50);
// scrolldelay = setTimeout(pageScroll,1);
pageScroll()
mousehover()

})
function mousehover(){
boxx.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    boxx.style.setProperty('--x', x + 'px');
    boxx.style.setProperty('--y', y + 'px');
  });
}
function pageScroll() {
    window.setInterval(function() {
        var elem = document.getElementById('card');
        elem.scrollTop = elem.scrollHeight;
      },1);
}