
const element = {
	getElement: function (clas) {
		const name = document.querySelector(clas);
		return name;
	},
	elementId: function (id) {
		const name = document.getElementById(id);
		return name;
	}
};

export const getElem = element.getElement;
export const getElemId = element.elementId;

