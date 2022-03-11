
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');


eventListeners();

function eventListeners(){
 
    form.addEventListener('submit',addNewItem);
    taskList.addEventListener('click', deleteItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function addNewItem(e){
    if(input.value ===''){
        alert('Please New İtem');
        e.preventDefault();
        return    
              
    }
   
    
    

    

    const li= document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    const a =document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    li.appendChild(a);

    taskList.appendChild(li);

    input.value='';
    

    e.preventDefault();
    return;

    
}

function deleteItem(e) {
    

        if (e.target.className === 'fas fa-times') {
            if (confirm('Sure ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}
function deleteAllItems(e) {

    if (confirm('Sure ?')) {
        taskList.innerHTML='';
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
                return(li);
            }
        });
    }
    e.preventDefault();
}