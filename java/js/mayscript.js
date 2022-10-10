const click = document.querySelector('.anime__2');
document.querySelector('.anime__2').addEventListener('click', function () {
	click.classList.toggle('anime__1');
	//click.classList.add('anime__1');

});
let dat = Date.now();
let timer = setInterval(function () {

	let dat2 = Date.now() - dat;
	if (dat2 >= 2000) {
		clearInterval(timer);
		return;
	}
	draw(dat2);
}, 20);
function draw(dat2) {
	const style = window.getComputedStyle(click);
	let width = style.getPropertyValue('width');
	width = width.replace(/[px]+/g, '');
	width = Number(width) + 2;
	click.style.width = width + "px";
}




