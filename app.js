var count = 0;
var images = ['img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpg', 'img/bg4.jpg'];
var slide = document.querySelector('.slide');


function changeslide() {

	slide.src = images[count];

	if (count < images.length - 1) {
		count++;
	} else {
		count = 0;
	}

	setTimeout(changeslide, 1500);
}

window.onload = changeslide;
