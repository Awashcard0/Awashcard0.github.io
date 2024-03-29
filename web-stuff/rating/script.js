var value = document.getElementById("face-rating").value;
var zero = 0
var one = 0
var two = 0
var three = 0
var or = 0
var five = 0
var res
var ares = "Not set"
var data



window.addEventListener("DOMContentLoaded",() => {
	const fr = new FaceRating("#face-rating");
});

class FaceRating {
	constructor(qs) {
		this.input = document.querySelector(qs);
		this.input?.addEventListener("input",this.update.bind(this));
		this.face = this.input?.previousElementSibling;
		this.update();
	}
	update(e) {
		let value = this.input.defaultValue;

		// when manually set
		if (e) value = e.target?.value;
		// when initiated
		else this.input.value = value;

		const min = this.input.min || 0;
		const max = this.input.max || 100;
		const percentRaw = (value - min) / (max - min) * 100;
		const percent = +percentRaw.toFixed(2);

		this.input?.style.setProperty("--percent",`${percent}%`);

		// face and range fill colors
		const maxHue = 120;
		const hueExtend = 30;
		const hue = Math.round(maxHue * percent / 100);

		let hue2 = hue - hueExtend;
		if (hue2 < 0) hue2 += 360;

		const hues = [hue,hue2];
		hues.forEach((h,i) => {
			this.face?.style.setProperty(`--face-hue${i + 1}`,h);
		});

		this.input?.style.setProperty("--input-hue",hue);

		// emotions
		const duration = 1;
		const delay = -(duration * 0.99) * percent / 100;
		const parts = ["right","left","mouth-lower","mouth-upper"];

		parts.forEach(p => {
			const el = this.face?.querySelector(`[data-${p}]`);
			el?.style.setProperty(`--delay-${p}`,`${delay}s`);
		});

		// aria label
		const faces = [
			"Sad face",
			"Slightly sad face",
			"Straight face",
			"Slightly happy face",
			"Happy face"
		];
		let faceIndex = Math.floor(faces.length * percent / 100);
		if (faceIndex === faces.length) --faceIndex;

		this.face?.setAttribute("aria-label",faces[faceIndex]);
	}
}

function send() {
	var value = document.getElementById("face-rating").value;
	if (value == 0) {
		zero = zero + 1
	} else if (value == 1) {
		one = one + 1
		ask()
	} else if (value == 2) {
		two = two + 1
		ask()
	} else if (value == 3) {
		three = three + 1
		ask()
	} else if (value == 4) {
		or = or + 1
		ask()
	} else if (value == 5) {
		five = five + 1
		document.getElementById("top").innerHTML = "Thank you!"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
	}
	
}

function stats() {
	
	  alert("One: " + one + " Two: " + two + " Three: " + three + " Four: " + or + " Five: " + five + " Most recent feedback: " + ares)

	//var elem = document.body;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function ask() {
	if (data == "y") {
	res = prompt("Do you have any other feedback?")
	if (res == "null") {
		document.getElementById("top").innerHTML = "Thank you!"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
	} else if (res == "") {
		document.getElementById("top").innerHTML = "Thank you!"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
	} else if (res == "no") {
		document.getElementById("top").innerHTML = "Thank you!"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
	} else if (res == "No") {
		document.getElementById("top").innerHTML = "Thank you!"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
	} else if (res == "NO") {
		document.getElementById("top").innerHTML = "Thank you!"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
	} else if (res == "nO") {
		document.getElementById("top").innerHTML = "Thank you!"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
	} else {
		ares = res
		document.getElementById("top").innerHTML = "Thank you for your feedback"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
	}
} else {
	document.getElementById("top").innerHTML = "Thank you!"
		setTimeout(function(){ document.getElementById("top").innerHTML = "How was your experience?" }, 3000);
}
}

function load() {
	data = prompt("Ask for feedback (y/n)")
}