function randColor() {
	var chars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
	var colors = [];

	// console.log(chars);

	for (var i = 0; i < 20; i++) {
		var currentColor = '';
		for (var j = 0; j < 6; j++) {
			currentColor += chars[Math.floor(Math.random() * 15-0)];
		}
		colors.push('#' + currentColor);
	}
	console.log(colors);
}

function reverse() {
	for (var i = 0; i < backgroundColors.length; i++) {
		hoverColors[i] = "#000000";
	}
	console.log(hoverColors);
}
