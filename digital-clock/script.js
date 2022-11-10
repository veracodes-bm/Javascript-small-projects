

const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minuets')
const secondEl = document.getElementById('seconds')
const ampmEl = document.getElementById('ampm')




function updateClock() {
     let h = new Date().getHours()
     let m = new Date().getMinutes()
     let s = new Date().getSeconds()

     if (h>12)  {
        h = h - 12
        ampm = 'pm'

     }

     h = h < 10 ? '0' + h : h;
     m = m < 10 ? '0' + m : m;
     s = s < 10 ? '0' + s : s;
    
     hourEl.innerText = h;
     minuteEl.innerText = m;
     secondEl.innerText= s;

     setTimeout(updateClock, 1000)
    }
    updateClock()