function calcFare() {
	let age = document.getElementById("age").value;
	let fareElement = document.getElementById("fare");
	let errorElement = document.getElementById("error-el");
	let baseRate = 0;
	let fare = 0;
	let Destination = document.getElementById("destination").value;
	let Reservation =  document.getElementById("reservation").value;
	document.getElementById("error-El").innerHTML = "";
	switch (Destination) {
		case "mumbai":
			baseRate = 600;
			break;
		case "bengaluru":
			baseRate = 450;
			break;
		case "mangaluru":
			baseRate = 300;
			break;
		case "haveri":
			baseRate = 350;
			break;
		default:
			document.getElementById("error-El").innerHTML = "Select a valid Destination";
	}
	
	// if (Destination == "mumbai") {
	// 	baseRate = 600;
	// } else if (Destination == "bengaluru") {
	// 	baseRate = 450;
	// } else if (Destination == "mangaluru") {
	// 	baseRate = 300;
	// } else if (Destination == "haveri") {
	// 	baseRate = 350;
	// } else {
	// 	document.getElementById("error-El").innerHTML = "Select a valid Destination";
	// }
	
	switch(Reservation){
		case "Tatkal": 
			baseRate = baseRate + 150;
	}

	errorElement.textContent = "";

	if (age < 0 || age == "") {
		errorElement.textContent = "Please enter a correct value";
		fareElement.textContent = "";
	} else if (age < 15 && Reservation =="Normal") {
		fareElement.textContent = baseRate * 0.5;
	} else if (age >= 15 && age < 60 ) {
		fareElement.textContent = baseRate;
	} else if (age >= 60 && age <= 120 && Reservation =="Normal") {
		fareElement.textContent = baseRate * 0.6;
	} else {
		errorElement.textContent = "Please enter a correct value";
		fareElement.textContent = "";
	}
}
