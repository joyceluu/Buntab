function clock() {
	var d = new Date();
	var hr = ((d.getHours() + 11) % 12 + 1);
	var min = d.getMinutes();
	var sec = d.getSeconds();

	min = rotate(min);
	sec = rotate(sec);
	document.getElementById("dt").innerHTML =
	hr + ":" + min + ":" + sec;
	setTimeout(clock, 500);
}

function rotate(t) {
	if (t < 10) {
		t = "0" + t.toString();
	}
	return t;
}

var time = new Date();

function monthToString() {
	var months = ["January", "February",
	 "March", "April", "May", "June", "July", "August", "September",
	 "October", "November", "December"];
	 var m = time.getMonth();
	 return months[m];

}

function weekdayString() {
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var day = time.getDay();
	return dayNames[day];
}

function dayString() {
	var d = time.getDate();
	return d;
}

function AMPM() {
	var h = time.getHours();
	if (h >= 0 && h <= 11) {
		return "AM";
	}
	else {
		return "PM";
	}
}

var txt = document.getElementById("datecol");
var dt = document.getElementById("ampm");
var info = document.createTextNode(weekdayString() + ", " + monthToString() + " " + dayString() + ",");
var timeOfDay = document.createTextNode(AMPM());

dt.appendChild(timeOfDay);
txt.appendChild(info);

clock()

