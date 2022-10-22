
const nombreUI = document.getElementById('nombre');
const sueldoUI = document.getElementById('sueldo');
const btnAgregar = document.getElementById('button');
const divRead = document.getElementById('read');
const nomina=[];

btnAgregar.addEventListener('click',agregar);

function agregar (e){
    e.preventDefault();

    if(nombreUI.value === '' || sueldoUI.value === ''){
        return;
    }

    objCreado = {
        nombre: nombreUI.value,
        sueldo: sueldoUI.value
    };
    nomina.push(objCreado);

    nombreUI.value = '';
    sueldoUI.value = '';

    mostrar();
}

function mostrar(){
    
    divRead.innerHTML='';
    
    nomina.forEach((element)=>{

        let divLeer = document.createElement('div');
        
        let nombre = document.createElement('h3');
        let texto = document.createTextNode(element.nombre);
        let contenedor = document.createElement('p');
        let sueldo = document.createTextNode(element.sueldo);
        let btnEliminar = document.createElement('button');
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

