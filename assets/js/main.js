var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var contenedorImgs = document.getElementsByClassName("cont-img")[0];


pictures.forEach(function(element){
	
	var div = document.createElement("div");
	div.setAttribute("class", "cont-cuadros");
	contenedorImgs.appendChild(div);
	

	var img = document.createElement("img");
	img.setAttribute("src", element);
	img.setAttribute("class", "panda-cuadros");
	div.appendChild(img);


	var span = document.createElement("span");
	span.setAttribute("class", "equis");
	var txt = document.createTextNode("X");
	span.appendChild(txt);
	div.appendChild(span);
});

(function deleteImage(){
	var equis = Array.from(document.getElementsByClassName("equis"));

	equis.forEach(function(cv){
		cv.addEventListener("click", function(){
			this.classList.toggle("no");
		});
	});

	var boton =	document.getElementById("restaurar");
	boton.addEventListener("click", function(el){
		
		equis.forEach(function(e){
			e.classList.remove("no");
		});
	});
})();