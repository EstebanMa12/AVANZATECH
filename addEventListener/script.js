/* Crear um formulário que reciba la ifnormacion de uma tarea, escuchar el submit del formulário para coger la info com form data transformarla em json y guardarla em um array, y listar esse array em el html */

const btnTask = document.getElementById('btningresar');
const tarea = document.getElementById('tarea');
const form = document.getElementById('listado');

//contenedor del listado
const listado= document.getElementById('taskContainer');

form.addEventListener('submit',mostrarTarea);


const arrTareas = [];
function mostrarTarea(event) {
    event.preventDefault();
    const formdata = new FormData(form);

    


}


function update(){
    let html = '';
    arrTareas.forEach(element => {
        const li = `<li>${element.nombre}</li>`
        html += li
    });
    listado.innerHTML=html;
}
