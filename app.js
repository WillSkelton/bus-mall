/* ============= Functions: ============= */
function specificRandom(min, max){
	return Math.random() * (max-min) + min;
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


//Constructs
for (var i = 0; i < picArray.length; i++) {
	var pic = new Picture(picArray[i]);
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
