const result = document.querySelector('.block');
//const result = document.getElementById('#block');
//result.style.marginLeft = '600px';
let a = 1;
let d = 1;
let w = 1;
let s = 1;
document.addEventListener('keydown', function (event) {
	if (event.code == 'ArrowRight') {
		d += 2;
		a = d;
		result.style.marginLeft = d + 'px';
	}
	if (event.code == 'KeyA' || event.code == 'ArrowLeft') {
		a -= 2;
		d = a;
		result.style.marginLeft = a + 'px';
	}
	if (event.code == 'ArrowUp') {
		w -= 2;
		s = w;
		result.style.marginTop = w + 'px';
		//result.style.marginBottom= k + 'px';
	}
	if (event.code == 'ArrowDown') {
		s += 2;
		w = s;
		result.style.marginTop = s + 'px';
	}
	if (event.code == 'KeyZ') {
		a = w = d = s = 1;
		result.style.marginLeft = '1px';
	}
});