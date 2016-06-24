/* ============= Constructor: ============= */

function Picture(name, fileType) {
	this.name = name;
	this.path = "assets/" + name + "." + fileType;
}

/* ============= Respective Methods: ============= */

/* ============= Global Variables: ============= */
var picArray = [];

/* ============= Functions: ============= */

/* ============= Main(): ============= */

var Bag = new Picture("bag", "jpg");
console.log(Bag);

var parent = document.getElementById('pic1');
var child = document.createElement('img');
child.src = Bag.path;

















/* ============= End: ============= */
