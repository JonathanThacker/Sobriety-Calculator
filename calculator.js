var myDate;

function setDate(datest){
myDate = datest.value;
myDate = new Date(myDate);
}

function FindTime(form){
var diff;
today = new Date();
diff = today.getTime() - myDate.getTime();
years = Math.floor(diff / 31536000000);
days = Math.floor(diff / 86400000);
H = Math.floor(days % 365);
R = Math.floor(H % 30);
dMy = Math.floor(days % 365);
bM = Math.floor(dMy % 30);
bm = Math.floor(dMy - bM);
month = Math.floor(bm / 30);

form.Fyears.value = years;
form.Fmonth.value = month;
form.FR.value = R;

}


