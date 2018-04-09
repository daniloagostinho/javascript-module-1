var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodo() {
    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo( ' + posicao + ' )');

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        listElement.appendChild(linkElement);
    }
}

renderTodo();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
    saveToStarage();
}

function deleteTodo(posicao) {
    // remova o proximo item na posicao passada
    todos.splice(posicao, 1);
    renderTodo();
    saveToStarage();
}

buttonElement.onclick = addTodo;

function saveToStarage() {
    // localStorage so armazena chave valor nao suporta vetores
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

