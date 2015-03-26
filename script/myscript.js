window.onload = function() {
	document.getElementById("boxPlus").addEventListener("click", addBox)
	document.getElementById("boxMinus").addEventListener("click", removeBox)
}
function addBox() {
	var elm = document.createElement("div");
	elm.setAttribute("class", "box");
	document.getElementById("container").appendChild(elm);
}

function removeBox() {
	var elm = document.getElementById("container").lastChild;
	if (elm) {
		document.getElementById("container").removeChild(elm);
	}
}
