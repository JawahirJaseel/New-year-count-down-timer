const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function update_time() {
  const current_year = new Date().getFullYear();

  const new_year = new Date(`1 january ${current_year + 1} 00:00:00`);

  const current_date = new Date();

  const dif = new_year - current_date;

  const d = Math.floor(dif / 1000 / 60 / 60 / 24);

  const h = Math.floor((dif / 1000 / 60 / 60) % 24);

  const m = Math.floor((dif / 1000 / 60) % 60);

  const s = Math.floor((dif / 1000) % 60);

  day.innerHTML = d;
  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;

  const up = d + " " + h + " " + m + " " + s + " ";
}

setInterval(update_time, 1000);
