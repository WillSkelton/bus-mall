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
	}

	console.log(webSpot);


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
var picArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
/* ============= Main(): ============= */


// Constructs all the things
for (var i = 0; i < picArray.length; i++) {
	var pic = new Picture(picArray[i]);
}

// Randomly selects the pictures
selectPictures();

for (var i = 0; i < webSpot.length; i++) {
	var parent = document.getElementById('pic' + (i + 1));
	var child = document.createElement('img');
	child.src = webSpot[i];
	parent.appendChild(child);

}



/* ============= For Later: ============= */
// var Bag = new Picture("bag", "jpg");
// console.log(Bag);
//
// var parent = document.getElementById('pic1');
// var child = document.createElement('img');
// child.src = Bag.path;
// parent.appendChild(child);













/* ============= End: ============= */
