
// DEFINICION DE ARRAY DE MASCOTAS
let mascotasArray = [
	{name:'Cachupin', tipo:'perro'},
	{name:'Leto', tipo:'gato'},
];

// REFERENCIO LOS CAMPOS DEL FORMULARIO PARA PODER AGREGAR EL FOCUS AL CARGAR LA PAGINA
const nameForm = document.getElementById("idName");
const tipoForm = document.getElementById("idTipo");




// FUNCION QUE AGREGA UNA NUEVA MASCOTA 
const add = (event) =>{
	event.preventDefault();

	
	console.log(`
		name: ${nameForm.value}
		tipo: ${tipoForm.value}
	`);

	const mascota = {
		name: nameForm.value,
		tipo: tipoForm.value
	}

	mascotasArray.push(mascota);

	listMascotas();
	reset();
	nameForm.focus();
}


const deleteMascota = (e, index) =>{
	
		e.preventDefault();
		const updatedList = [
			...mascotasArray.slice(0, index),
			...mascotasArray.slice(index + 1),
		];

		mascotasArray = [...updatedList];
		

		listMascotas();
		reset();
		nameForm.focus();

};

// FUNCION QUE VUELVE A CREAR EL <ul></ul> 
const toJoin = (mascota, i) =>{
  const list = document.getElementById("list");
  const item = document.createElement("li");
  item.innerHTML = `<a href="#" onclick="deleteMascota(event,${i})" >
		<ion-icon name="trash-outline"></ion-icon>
		<span class="ml-4" >${mascota.name}</span>
		<span class="ml-4 badge badge-secondary" >${mascota.tipo}</span>
	</a>`
  list.appendChild(item);
}

// FUNCION QUE LISTA LSO ELEMENTOS DEL ARRAY mascotasArray
const listMascotas = () => {
  const ul = document.getElementById("list");
	ul.innerHTML = "";
	
  if (mascotasArray.length > 0) {
    mascotasArray.forEach((mascota, i) => {
      toJoin(mascota, i);
		});
		
  } else {
		
		notifications();
 
  }
}


// FUNCION QUE LIMPIA EL FORMULARIO
const reset = () =>{
	document.getElementById("idForm").reset();
}


// FUNCION DE NOTIFICACION CUAL EL ARRAY NO TIENE ELEMENTOS
const notifications = () =>{
  const alerta = document.getElementById("notification");
	alerta.innerHTML = `
		<div id="notification" class="alert alert-success mt-2">
			Que esperas, Ingresa una mascota
		</div>`;
}


/**
 * Cuando la página cargue...
 */
// window.onload = function (event) {
window.onload = () => {
	
	listMascotas();
	nameForm.focus();

};
