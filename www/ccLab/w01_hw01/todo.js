// based on Gabor Szabo's To Do List tutorial || http://code-maven.com/todo-in-html-and-javascript

var colors = [ "#FD367E", "#FD367E", "#FD367E", "#932B77", "#932B77", "#932B77", "#4E1184", "#4E1184", "#4E1184", "#0E1555", "#0E1555", "#0E1555", "#0E1555", "#0E1555" ];


function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value;
 
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function toBottom() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.move( id, todos.length );
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

Array.prototype.move = function move(from, to){

    this.splice( to, 0, this.splice(from, 1)[0] );

}
// var ar = [1,2,3,4,5];
// console.log(ar); //1,2,3,4,5
// ar.move(0,ar.length);
// console.log(ar); //2,3,4,5,1
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        // console.log(colors[i]);
        html += '<li style="color:' + colors[i] + ';">' + todos[i] + '<div class="listButton"><button class="toBottom" id="' + i  + '">ˇ</button><button class="remove" id="' + i + '">x</button></div></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('toBottom');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', toBottom);
    };
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();