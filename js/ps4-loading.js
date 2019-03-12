(function() {
	function randomShape(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	function loadingScreen() {
		var cross = "./img/cross.png";
		var circle = "./img/circle.png";
		var triangle = "./img/triangle.png";
		var square = "./img/square.png";
		var elements = document.querySelectorAll(".ps-icon");
		Array.prototype.forEach.call(elements, function(el, i) {
			setTimeout(function() {
				el.style.animation = "scaling";
				el.style.animationDuration = "1s";
				el.style.animationIterationCount = "1";
				el.style.backgroundImage = "url(" + randomShape([triangle, square, circle, cross]) + ")";
			}, i * 400);
			el.style.animation = "";
			el.style.animationDuration = "";
			el.style.animationIterationCount = "";
		});

		function changeShape() {
			var elements = document.querySelectorAll(".ps-icon");
			Array.prototype.forEach.call(elements, function(el, i) {
				setTimeout(function() {
					el.style.animation = "scaling";
					el.style.animationDuration = "1s";
					el.style.animationIterationCount = "1";
					el.style.backgroundImage = "url(" + randomShape([triangle, square, circle, cross]) + ")";
				}, 100 + i * 300);
				el.style.animation = "";
				el.style.animationDuration = "";
				el.style.animationIterationCount = "";
			});
		}
		setInterval(changeShape, 3000);
	}
	loadingScreen();
})();