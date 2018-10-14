function clock() {
	var d = new Date();
	var hr = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();

	rotate(min);
	rotate(sec);
	document.getElementById("datetime").innerHTML =
	hr + ":" + min + ":" + sec;
	setTimeout(clock, 500);
}

function rotate(t) {
	if (t < 10) {
		t = "0" + t;
		return t;
	}
}

var time = new Date();

function monthToString() {
	var months = ["January", "February",
	 "March", "April", "May", "June", "July", "August", "September",
	 "October", "November", "December"];
	 var m = time.getMonth();
	 return months[m]

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

var txt = document.getElementById("datecol");
var info = document.createTextNode(weekdayString() + ", " + monthToString() + " " + dayString());
txt.appendChild(info);

clock()

