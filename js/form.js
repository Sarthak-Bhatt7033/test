
//Form__Group
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}
var dateTomorrow = year + "-" + month + "-" + date;
var dateform__group = document.querySelector("#date");
var timeform__group = document.querySelector("#time");

dateform__group.setAttribute("min", dateTomorrow);

dateform__group.onchange = function () {
  timeform__group.setAttribute("min", this.value);
}

var btnSubmit = document.querySelector