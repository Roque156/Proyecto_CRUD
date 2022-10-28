
const nombreUI = document.getElementById('nombre');
const sueldoUI = document.getElementById('sueldo');
const btnAgregar = document.getElementById('btn');
//const btnActualizar = document.getElementById('btn2');
const divRead = document.getElementById('read');

btnAgregar.addEventListener('click',agregar);
//btnActualizar.addEventListener('click',actualizar);

function agregar (e){
    
    e.preventDefault();

    if(nombreUI.value === '' || sueldoUI.value === ''){

        return;
    }
    
    let objCreado = {
        nombre: nombreUI.value,
        sueldo: sueldoUI.value,
        id: Date.now()
    };

    let arreglo = JSON.parse(localStorage.getItem("DB"));

    if (arreglo === null) {
    arreglo = [];
    arreglo.push(objCreado);
    localStorage.setItem("DB", JSON.stringify(arreglo));
    } else {
    arreglo.push(objCreado);
    localStorage.setItem("DB", JSON.stringify(arreglo));
    }

    mostrar();

    nombreUI.value = '';
    sueldoUI.value = '';
}

function mostrar(){

    let datos = JSON.parse(localStorage.getItem("DB"));

    if(datos !=null){
    
    divRead.innerHTML="";
    
    datos.forEach((element)=>{

        let divLeer = document.createElement('div');
        divLeer.setAttribute('key',element.id);

        let nombre = document.createElement('h3');
        let texto = document.createTextNode(element.nombre);
        let contenedor = document.createElement('p');
        let sueldo = document.createTextNode(element.sueldo);
        let btnEliminar = document.createElement('button');
        btnEliminar.addEventListener('click',eliminar);
        let btnEditar = document.createElement('button');
        let textobtnEliminar = document.createTextNode('Eliminar');
        let textobtnEditar = document.createTextNode('Editar');

        btnEditar.appendChild(textobtnEditar);
        btnEliminar.appendChild(textobtnEliminar);
        nombre.appendChild(texto);
        contenedor.appendChild(sueldo);

        divLeer.appendChild(nombre);
        divLeer.appendChild(contenedor);
        divLeer.appendChild(btnEditar);
        divLeer.appendChild(btnEliminar);

        divRead.appendChild(divLeer);

    });
}
}
function eliminar(e){

    let buscarElemento = e.path[1].getAttribute('key');
    
    let datos = JSON.parse(localStorage.getItem("DB"));
    let index = datos.findIndex(element=> element.id == buscarElemento);

    datos.splice(index,1);

    localStorage.setItem("DB", JSON.stringify(datos));

    mostrar();

    nombreUI.value = '';
    sueldoUI.value = '';
}
