var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var contenedorImgs = document.getElementsByClassName("cont-img")[0];

pictures.forEach(function(element){
	//div contenedor de las imágenes
	var div = document.createElement("div");
	div.setAttribute("class", "cont-cuadros");
	contenedorImgs.appendChild(div);
	
	//imágenes
	var img = document.createElement("img");
	img.setAttribute("src", element);
	img.setAttribute("class", "panda-cuadros");
	div.appendChild(img);

	//span que contiene la X
	var span = document.createElement("span");
	span.setAttribute("class", "equis");
	var txt = document.createTextNode("X");
	span.appendChild(txt);
	div.appendChild(span);
});

(function deleteImage(){
	var equis = Array.from(document.getElementsByClassName("equis")); //span que contiene la X
	var contCuadros = Array.from(document.getElementsByClassName("cont-cuadros")); //div que contiene la imagen y span
	//elimina las imágenes al hacer click en la X
	contCuadros.forEach(function(cv){
		cv.addEventListener("click", function(){
			this.classList.toggle("delete-img");
		});
	});
	//restaura las imágenes
	var botonRes =	document.getElementById("restaurar");
	botonRes.addEventListener("click", function(){
		contCuadros.forEach(function(e){
			e.classList.remove("delete-img");
		});
	});
	//elimina el texto de la izquierda
	var txtUno = document.getElementById("txt-uno");
	var botonOri = document.getElementById("origen");
	botonOri.addEventListener("click", function(){
		txtUno.classList.toggle("delete-txt");
	});
	//elimina el texto de la derecha
	var txtDos = document.getElementById("txt-dos");
	var botonExt = document.getElementById("extincion");
	botonExt.addEventListener("click", function(){
		txtDos.classList.toggle("delete-txt");
	});	
})();