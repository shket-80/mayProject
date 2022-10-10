import { getElem, getElemId } from "../modul/element.js";


let txtrArray = getElem('#arry');//array
let txtrAdd = getElemId('value');
let txtrResult = getElemId('txtr-arry__copi');
let txtrSplice1 = getElemId('arg1');
let txtrSplice2 = getElemId('arg2');
let txtrSplice3 = getElemId('arg3');
const btnadd = getElem('.btnadd');
const btnpush = document.querySelector('.btn1');
const btnpop = document.querySelector('.btn2');
const btnunSift = document.querySelector('.btn3');
const btnSift = document.querySelector('.btn4');
const btnsplice = document.querySelector('.btn5');
btnsplice.disabled = true;
txtrArray.disabled = true;
txtrResult.disabled = true;
let mass = [];
let massResult = [];
btnadd.addEventListener("click", function () {
	if (txtrAdd.value != '' && txtrAdd.value != null && txtrAdd.value != 0) {
		txtrAdd.value = txtrAdd.value.replace(/\s+/g, '');
		mass.push(txtrAdd.value.trim());
		txtrAdd.value = '';
		massResult = mass.slice();
		txtrArray.value = txtrResult.value = mass;
		txtrAdd.focus();
	}
	txtrAdd.value = '';
	txtrAdd.focus();
});

btnpush.addEventListener("click", function () {
	//impt.innerHTML = `${fruits}`;
	//impt.innerHTML = `${fruits.at(-1)}`;
	if (txtrAdd.value != '' && txtrAdd.value != null && txtrAdd.value != 0) {
		massResult.push(txtrAdd.value.trim());
		txtrResult.value = massResult;
		txtrAdd.value = '';
		txtrAdd.focus();
	}
	txtrAdd.value = '';
	txtrAdd.focus();
});

btnpop.addEventListener("click", function () {
	massResult.pop();
	txtrResult.value = massResult;
	txtrAdd.value = '';
	txtrAdd.focus();
});

btnunSift.addEventListener("click", function () {
	if (txtrAdd.value != '' && txtrAdd.value != null && txtrAdd.value != 0) {
		massResult.unshift(txtrAdd.value.trim());
		txtrResult.value = massResult;
		txtrAdd.value = '';
		txtrAdd.focus();
	}
	txtrAdd.value = '';
	txtrAdd.focus();
});

btnSift.addEventListener("click", function () {
	//txtr = document.getElementById('value').value;
	massResult.shift();
	txtrResult.value = massResult;
	txtrAdd.value = '';
	txtrAdd.focus();
});
txtrSplice1.oninput = function () {

	let ch = txtrSplice1.value.replace(/[^\d]/g, ''); //разрешаем вводить только числа и запятую

	txtrSplice1.value = ch;
	if (/^[0][\d]+/g.test(txtrSplice1.value)) {
		ch = "0";
	}
	//ch = ch.replace(/[0][\d]+/g, "0");
	txtrSplice1.value = ch;
	//alert(txtrSplice1.value);
	btnsplice.disabled = false;
	if (txtrSplice1.value == '') {
		btnsplice.disabled = true;
	}
};
txtrSplice2.oninput = function () {
	let ch = txtrSplice1.value.replace(/[^\d,]/g, ''); //разрешаем вводить только числа и запятую
	if (txtrSplice2.value == '') {
		ch = txtrSplice2.value.replace(/[^1-9]/g, ''); //разрешаем вводить только числа и запятую
	}
	if (txtrSplice2.value != '') {
		ch = txtrSplice2.value.replace(/[^\d]/g, ''); //разрешаем вводить только числа и запятую
	}
	if (/^[0][\d]+/g.test(txtrSplice2.value)) {
		ch = "0";
	}
	txtrSplice2.value = ch;
};
btnsplice.addEventListener('click', function () {
	if (txtrSplice2.value == '' && txtrSplice3.value == '') {
		massResult.splice(txtrSplice1.value);
		txtrResult.value = massResult;
	}
	if (txtrSplice3.value == '') {
		massResult.splice(txtrSplice1.value, txtrSplice2.value);
		txtrResult.value = massResult;
	}
	if (txtrSplice1.value != '' && txtrSplice2.value != '' && txtrSplice3.value != '') {
		massResult.splice(txtrSplice1.value, txtrSplice2.value, txtrSplice3.value);
		txtrResult.value = massResult;
	}
});

//const element = document.querySelector('.wrapper'),
//style = window.getComputedStyle(element),
//width = style.getPropertyValue('margin');










const btnslice = document.querySelector('.btn6');
const btnconcat = document.querySelector('.btn7');
const h2result = document.getElementById("result");
const h2result2 = document.querySelector(".result2");
const h2result3 = document.querySelector(".result3");

let fruits = ["Яблоко", "Апельсин", "Слива",];
let fruits2 = ["Дыня", "Абрикос", "Aрбуз", "Тыква",];
h2result.innerText = fruits;
h2result2.innerText = fruits2;
//fruits.push('limon');
//fruits.unshift('kivi');
//impt.innerHTML = `${fruits}`;








let fruitse = [1];
btnconcat.addEventListener('click', function () {
	fruitse = fruits.concat(fruits2);
	h2result3.innerText = fruitse;
});
btnslice.addEventListener('click', function () {
	let mass = fruits.slice(fruits2);
	h2result3.innerText = mass;
});


