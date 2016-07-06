/* ============= Global Variables: ============= */
var allPictures = [];
var webSpot = ["plcHldr1", "plcHldr2", "plcHldr3"];
var picUsed = ["plcHldr1", "plcHldr2", "plcHldr3"];
var picArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var lableArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allTimesChosen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var percentAllTimesChosen = [];
var backgroundColors = ['#0096FF', '#E800FF'];
var hoverColors = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"];
var chosenPictures = [];
var numPicks = 0;

var BarChartData = {
	labels: lableArray,
  datasets: [
    {
      label: "Times Chosen",
      backgroundColor: backgroundColors,
      borderColor: hoverColors,
      borderWidth: 1,
      hoverBackgroundColor: hoverColors,
      hoverBorderColor: backgroundColors,
      data: allTimesChosen,
    }
  ]
};

var PieChartData = {
    labels: lableArray,
    datasets: [
        {
            data: allTimesChosen,
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverColors
        }]
};

var localData = {
}
/* ============= Constructor: ============= */

function Picture(name) {
	this.name = name;
	this.path = "assets/" + name + ".jpg";
	this.timesChosen = 0;
	allPictures.push(this);
}

/* ============= Functions: ============= */
function specificRandom(min, max){
	return Math.random() * (max-min) + min;
}

function specificRandom(min, max, excluding){

	while(true){
		var rand = Math.floor(Math.random() * (max-min) + min);
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
			picture.src = webSpot[i];
			picture.name = picUsed[i].name;
		}
}

function showStats(event){

	if(numPicks === 14){
		removeListener();
		getStatData();
		graphTime();

		console.log(allTimesChosen);

		updateLocalStorage();
		console.log(allTimesChosen);

	}
	else{
		var objName = event.target.name;
		numPicks++;
		for (var i = 0; i < allPictures.length; i++) {
			if (allPictures[i].name === objName){
				allPictures[i].timesChosen++;

				break;

			}
		}
	}

	selectPictures();
	displayPictures();
}

function eventListening() {

	var playAgain = document.getElementById('playAgain');
	playAgain.addEventListener("click", doAllTheThings);

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

function getStatData() {

	for (var i = 0; i < allPictures.length; i++) {
		allTimesChosen[i] = allPictures[i].timesChosen;
		// if(chosenPictures.indexOf(allPictures[i]) === -1){
		// 	chosenPictures[i] = allPictures[i]
		// }

	}
}

function graphTime(){
	var parent = document.getElementById('barChartSection');
	parent.style.opacity = "1";

	parent = document.getElementById('pieChartSection');
	parent.style.opacity = "1";


	var ctx = document.getElementById("barChart").getContext("2d");
	var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: BarChartData,
	});

	ctx = document.getElementById("pieChart").getContext("2d");
	var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: PieChartData,
	});
}

function randColor() {
	var chars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
	var colors = [];

	// console.log(chars);

	for (var i = 0; i < picArray.length - 2; i++) {
		var currentColor = '';
		for (var j = 0; j < 6; j++) {
			currentColor += chars[Math.floor(Math.random() * 15-0)];
		}
		backgroundColors.push('#' + currentColor);
	}
	console.log(colors);
}

function doAllTheThings() {
	numPicks = 0;
	constructPictures();
	randColor();
	displayPictures();
	eventListening();


	// graphTime();
}

function updateLocalStorage() {
	localStorage.setItem('allPictures', JSON.stringify(allPictures));
}

/* ============= Respective Methods: ============= */




/* ============= Main(): ============= */


doAllTheThings();

















/* ============= End: ============= */
