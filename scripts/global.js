window.onload = function () {
	function slideDown(element) {
		element.style.height = `${element.scrollHeight}px`
	}
	function show(e) {
		slideDown(document.getElementById("solution-" + e.srcElement.id))
	}
	var elements = document.getElementsByClassName("toggle-solution")
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("click", show) // add an event listener to the button
	}
}
