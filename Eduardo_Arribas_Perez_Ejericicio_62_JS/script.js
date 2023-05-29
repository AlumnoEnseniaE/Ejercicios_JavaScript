function areaTriangulo() {
	
	let areaTriangulo=0;
	let altura = parseFloat(document.getElementById("altura").value);
	let base = parseFloat(document.getElementById("base").value);

	areaTriangulo= (base*altura)/2;
	
	parrafo.innerHTML = 'El area del triangulo es :'+areaTriangulo;
			  
}