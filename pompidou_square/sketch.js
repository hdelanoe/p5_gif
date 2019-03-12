 let size = 96
 let angle = 0;
 let color = 0;

function setup() {
	createCanvas(1920, 1080, WEBGL);
	rectMode(CENTER);
	angleMode(DEGREES);
	// capturer.start();
}

function draw() {

	// if (angle > 90 && angle < 91) {
	// 	capturer.stop();
	// 	capturer.save();
	// }
	// color = 255 * abs(sin(angle * 8));
	background(255, 255, 255);
	let i = 0;
	let j = 0;
	rotateZ(45);
	// rotateY(angle);
	fill(0, 0, 0, 255);
	translate(-width * 1.1 / 2, -width * 1.1 /2);
	beginShape();
	for (let a = 0 ; a < 360 ; a += 360 / 5){
		let x = 100 * sin(a) + 200;
		let y = 100 * sin(a) + 200;
		vertex(x, y);  
	}
	endShape(CLOSE);
	for (j = 0 ; j < width * 1.1; j += size * 1.1) {
		for (i = 0 ; i < width * 1.1 ; i += size * 1.1) {
			
			box(size, size, 1);
			translate(size * 1.1, 0);
		}
		translate(-i, size * 1.1);
	}

	translate(width * 1.1 / 2, -j + width * 1.1 / 2, -10);
	rotateZ(angle);

	fill(0);
	translate(-width * 1.1 / 2, -width * 1.1 / 2);
	for (j = 0 ; j < width * 1.1; j += size * 1.1) {
		for (i = 0 ; i < width * 1.1; i += size * 1.1) {

			box(size, size, 1);
			translate(size * 1.1, 0);
		}
		translate(-i, size * 1.1);
	}

	angle += 360 / 60 / 10;
	capturer.capture(document.getElementById('defaultCanvas0'));
}