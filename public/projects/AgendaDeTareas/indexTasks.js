let taskList = []; //array que guardara las tareas ingresadas como elementos.
let idTaskEdit;
const alertPlaceholder = document.getElementById('alertErrorTask');

function addTask(){
    //capturamos la tarea
    let taskValue = document.getElementById("inputTask").value;
    //validando si el input tiene valor 
    if(taskValue !== ''){
        //agregamos la tarea a la lista
        taskList.push(taskValue);
        //limpiamos el input despues de agregar una tarea
        document.getElementById('inputTask').value = '';
        //validamos lista
        showTaskList();
        return;//el return sera para devolver lo anterior y sobre todo la funcion showTaskList para mostrar la tarea.
    }
    alert('ingrese algo','danger');
}



function respaldar() {
    sessionStorage.setItem('taskList',taskList);
}

function restoreTask(){
    let taskData = sessionStorage.getItem('taskList');
    if (taskData !== "") {
        taskList = taskData.split(',');
        showTaskList();
    }
}


function showTaskList(){ //Esta funcion ira anclada al addTask para despues mostrar la tarea agregada al array.

    let listTask = '';
    const ulTaskList = document.getElementById('taskList');
    ulTaskList.innerHTML = '';
    const wrapper = document.createElement('div');
    taskList.forEach(function(task, index){
       listTask += `<div class="list-group-item" id="Task">${task}
        <br><button id="editar" type="button" class="btn btn-warning float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editTask(${index})">Editar</button>
        <button id="borrar" type="reset" class="btn btn-danger float-end" onclick="deleteTask(${index})">Borrar</button><br>
        </div>`
    });
    wrapper.innerHTML = listTask;
    ulTaskList.append(wrapper);
}



// FUNCION PARA CAPTURAR EL BOTON EDITAR
function editTask(idTask){
    document.getElementById('inputEditTask').value = taskList[idTask]
    idTaskEdit = idTask;
}

// FUNCION BORRAR TAREA
function deleteTask(idTask){
    document.getElementById('inputEditTask').value = taskList.splice(idTask,1);
    showTaskList();
}

//FUNCION PARA GUARDAR EL EDIT DE LA TAREA
function saveModalChanges() {
    taskList[idTaskEdit] = document.getElementById('inputEditTask').value;
    showTaskList()
}

//funciones externas

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button id="closeAlert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)


setTimeout(function(){
    document.getElementById('closeAlert').click();
},1500);
}

