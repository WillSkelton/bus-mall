/* ============= Global Variables: ============= */
var allPictures = [];
var webSpot = ["plcHldr1", "plcHldr2", "plcHldr3"];
var picUsed = ["plcHldr1", "plcHldr2", "plcHldr3"];
var picArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var lableArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allTimesChosen = [];
var percentAllTimesChosen = [];
var backgroundColors = ['#0096FF', '#E800FF', "#766e54", '#17FF00', '#FF6900', "#01b358",  '#580CE8', "#580407", '#0CE86F', '#EBFFC2', '#FF1400', '#BDE8C8', '#FF0D77', "#205c40", "#e2a1d6", "#c4d257", "#6577cd", "#34efc1", "#647004", "#5af5d7"];
var hoverColors = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"];
var chosenPictures = [];
var numPicks = 0;

var BarChartData = {
	labels: lableArray,
  datasets: [
    {
      label: "Times Chosen",
      backgroundColor: "rgba(0, 150, 255, .7)",
      borderColor: "rgba(255,255,255,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.7)",
      hoverBorderColor: "rgba(255,99,132,1)",
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
		//
		// if(allPictures[i].timesChosen > 0){
		// 	if(chosenPictures.indexOf(allPictures[i]) === -1){
		// 		chosenPictures[i] = allPictures[i]
		// 	}
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

function doAllTheThings() {

	constructPictures();
	displayPictures();
	eventListening();

	// graphTime();
}


/* ============= Respective Methods: ============= */




/* ============= Main(): ============= */


doAllTheThings();
















/* ============= End: ============= */
