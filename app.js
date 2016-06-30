/* ============= Functions: ============= */
function specificRandom(min, max){
	return Math.random() * (max-min) + min;
}

function specificRandom(min, max, excluding){

	while(true){
		var rand = parseInt((Math.random() * (max-min) + min).toFixed(0));
		if (excluding.indexOf(rand) === -1) {
			return rand;
		}
	}

}

function selectPictures() {
	var excluding = [];
	var randPic = 0;
	for (var i = 0; i < 3; i++) {
		randPic = specificRandom(0, 19, excluding);
		excluding[i] =  randPic;
		webSpot[i] = allPictures[randPic].path;
		picUsed[i] = allPictures[randPic];
	}

}

function constructPictures() {
	// Constructs all the things
	for (var i = 0; i < picArray.length; i++) {
		var pic = new Picture(picArray[i]);

	}
}

function displayPictures(){
	// Randomly selects the pictures
	selectPictures();
		// Adds new Pictures to DOM
		for (var i = 0; i < webSpot.length; i++) {
			var picture = document.getElementById('pic' + (i + 1));
			picture.src = "assets/" + picUsed[i].name + ".jpg";
			picture.name = picUsed[i].name;
		}
}

function showStats(event){
	// console.log(numPicks);

	if(numPicks === 14){
		removeListener();
		// makeTable();

		graphTime();

	}
	else{
		var click = event.target.name;
		// console.log(click);
		numPicks++;
		for (var i = 0; i < allPictures.length; i++) {
			if (allPictures[i].name === click){
				allPictures[i].timesChosen++;

				break;

			}
		}
	}

	selectPictures();
	displayPictures();
}

function eventListening() {
	var randomizer1 = document.getElementById(pic1);
	pic1.addEventListener("click", showStats);

	var randomizer2 = document.getElementById(pic2);
	pic2.addEventListener("click", showStats);

	var randomizer3 = document.getElementById(pic3);
	pic3.addEventListener("click", showStats);

}

function removeListener(){
	var randomizer1 = document.getElementById(pic1);
	pic1.removeEventListener("click", showStats);

	var randomizer2 = document.getElementById(pic2);
	pic2.removeEventListener("click", showStats);

	var randomizer3 = document.getElementById(pic3);
	pic3.removeEventListener("click", showStats);
}

function makeTable(){
	for (var i = 0; i < picArray.length; i++) {
		var tHeadParent = document.getElementById('thead-tr');
		var tHeadChild = document.createElement('td');
		tHeadChild.textContent = picArray[i];
		tHeadParent.appendChild(tHeadChild);
	}

	for (var i = 0; i < picArray.length; i++) {
		var tBodyParent = document.getElementById('tbody-tr');
		var tBodyChild = document.createElement('td');
		tBodyChild.textContent = allPictures[i].timesChosen;
		tBodyParent.appendChild(tBodyChild);

	}
}

function getStatData() {
	console.log(allPictures);

	var allTimesChosen = [];
	for (var i = 0; i < picArray.length; i++) {
		allTimesChosen[i] = allPictures[i].timesChosen;
	}
}

function graphTime(){
	console.log(allTimesChosen);

	var ctx = document.getElementById("stats").getContext("2d");
	console.log(data);
	var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
	});
}

function doAllTheThings() {

	constructPictures();
	displayPictures();
	eventListening();

	// graphTime();
}



/* ============= Constructor: ============= */

function Picture(name) {
	this.name = name;
	this.path = "assets/" + name + ".jpg";
	this.timesChosen = 0;
	allPictures.push(this);
}


/* ============= Respective Methods: ============= */

/* ============= Global Variables: ============= */
var allPictures = [];
var webSpot = ["plcHldr1", "plcHldr2", "plcHldr3"];
var picUsed = ["plcHldr1", "plcHldr2", "plcHldr3"];
var picArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var lableArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allTimesChosen = [];
var numPicks = 0;

var data = {
	labels: lableArray,
  datasets: [
    {
      label: "Times Chosen",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: allTimesChosen,
    }
  ]
};

/* ============= Main(): ============= */
doAllTheThings();















/* ============= End: ============= */
