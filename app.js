const marcas = [

"Vogue",
"Samy Cosmetics",
"Trendy",
"Khol Cosmetics",
"Dolce Bella",
"Tonos",
"Jolie de Vogue",
"L'Bel",
"Ésika",
"Cyzone"

];

let puntuacionMarcas = {};

marcas.forEach(marca => {

puntuacionMarcas[marca] = 0;

});

let marcaA;
let marcaB;

function nuevaComparacion(){

marcaA = marcas[Math.floor(Math.random()*marcas.length)];
marcaB = marcas[Math.floor(Math.random()*marcas.length)];

while(marcaA === marcaB){

marcaB = marcas[Math.floor(Math.random()*marcas.length)];

}

document.getElementById("marcaA").innerText = marcaA;
document.getElementById("marcaB").innerText = marcaB;

}

function votar(opcion){

if(opcion === "A"){

puntuacionMarcas[marcaA]++;

}else{

puntuacionMarcas[marcaB]++;

}

mostrarRanking();

nuevaComparacion();

}

function mostrarRanking(){

let ranking = Object.entries(puntuacionMarcas)
.sort((a,b)=>b[1]-a[1]);

let lista = document.getElementById("ranking");

lista.innerHTML="";

ranking.forEach(item=>{

let li=document.createElement("li");

li.innerText=item[0]+" — "+item[1]+" puntos";

lista.appendChild(li);

});

}

nuevaComparacion();
