let tasklist = [];
let idTaskEdit;
const alertPlaceholder = document.getElementById('alertErrorTask');

//CAPTURAMOS EL CONTACTO Y LO PASAMOS A OBJETO
function addTask() {

    let contactValue = document.getElementById('inputTask').value;
    let contactValue2 = document.getElementById('inputTask1').value;
    //validamos si el input tiene valor
    if (contactValue, contactValue2 !== '') { 
        tasklist.push({
            'nombre': contactValue,
            'numero': contactValue2
        });
    
        //Limpiar input
        document.getElementById('inputTask').value = '';
        document.getElementById('inputTask1').value = '';
        showContactList();
        return;
    } else {
        alert('ingrese nombre y numero', 'danger');
    }
}

// MUESTRA EL CONTACTO INGRESADO EN LOS INPUTs
function showContactList() {
    let listTask = "";
    const ulTaskList = document.getElementById('taskList');
    ulTaskList.innerHTML = "";
    const wrapper = document.createElement('div')
    tasklist.forEach(function (contacto, index) {
        listTask += `<div class="list-group-item">
                        <strong>Nombre: </strong> ${tasklist[index].nombre}
                            <button type="button" onclick="editTask(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning float-end ">Editar</button>
                            <button type="button" onclick="deletTask(${index})" class="btn btn-danger float-end">Borrar</button>
                            <br>
                        <strong>Numero: </strong> ${tasklist[index].numero}
                    </div>`
    wrapper.innerHTML = listTask;
    ulTaskList.append(wrapper);
    });
}


//FUNCIONES EXTERNAS.
const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button id="closeAlert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper);
    setTimeout(function () {
        document.getElementById('closeAlert').click();
    }, 1200);
}

//FUNCION QUE NOS PERMITE MOSTRAR LA LISTA DEL CONTACTO BUSCADO
function searchTask() {
    let buscar = document.getElementById('inputSearchTask').value
    let position = "";
    let confirmSearch = tasklist.find(element =>{ 
        if (element.nombre.includes(buscar)){
            position = tasklist.indexOf(element)
            return true;
        } 
    });
    let listTask = '';
    const ulTaskList = document.getElementById('taskList');
    ulTaskList.innerHTML = '';
    const wrapper = document.createElement('div');
    listTask = `<div class="list-group-item">
                    <strong>Nombre:</strong> ${confirmSearch.nombre}
                        <button type="button" onclick="editTask(${position})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning float-end">Editar</button>
                        <button type="button" onclick="deletTask(${position})" class="btn btn-danger float-end">Borrar</button>
                        <br>
                    <strong>Numero:</strong> ${confirmSearch.numero}
                </div>`
    wrapper.innerHTML = listTask;
    ulTaskList.append(wrapper);
}

//FUNCION QUE PERMITE EDITAR CONTACTO COMO OBJETO: NOMBRE/NUMERO
function editTask(idtask) {
    document.getElementById('nombre').value = tasklist[idtask].nombre;
    document.getElementById('numero').value = tasklist[idtask].numero;
    idTaskEdit = idtask;
}

//FUNCION QUE ELIMINA EL CONTACTO UNA VEZ ELIMINEMOS Y VOLVAMOS A RESPALDAR
function deletTask(idtask) {
    document.getElementById('nombre').value = tasklist.splice(idtask, 1);
    showContactList();
}

//FUNCION QUE GUARDA LOS CAMBIOS AL EDITAR
function saveModalChanges() {
    tasklist[idTaskEdit].nombre = document.getElementById('nombre').value;
    tasklist[idTaskEdit].numero = document.getElementById('numero').value;
    showContactList();
}

//FUNCION VOLVER A LA LISTA CUANDO HAYAMOS BUSCADO ALGUN CONTACTO
function volver(){
    showContactList();
}

//FUNCION PARA RESPALDAR LA LISTA ALMACENANDOLA EN "SESSION STORAGE"
function respaldar() { 
    sessionStorage.setItem('contacto', JSON.stringify(tasklist));
}

//PARA RECUPERAR LA LISTA ALMACENADA EN SESSION STORAGE
function restoreTask() {
    tasklist = JSON.parse(sessionStorage.getItem('contacto'))??[];
    showContactList();

}