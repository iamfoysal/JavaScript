


let newPost = document.querySelector('#newPost'); 
let form = document.querySelector('form');
let todoul = document.querySelector('#items');
let completedList = document.querySelector('.complete-list ul');



let createPost = function (post) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input'); 
    let label = document.createElement('label');
    label.innerText = post;
    checkbox.type = 'checkbox';
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    return listItem; 
}

let addPost = function (event) {
    event.preventDefault();
    let listItem =createPost(newPost.value);
    todoul.appendChild(listItem);
    newPost.value = '';
    bindInCompleteItem(listItem, completedTask );
}

let completedTask = function () {
    let listItem = this.parentNode;
    let deleteB = document.createElement('button');
    deleteB.innerText = 'Delete';
    deleteB.className = 'delete';
    listItem.appendChild(deleteB);
    let checkBox= listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completedList.appendChild(listItem);

    bindCompleteItem(listItem, deletePost);

}
let deletePost = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItem = function (taskItem, checkboxclick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxclick;

}

let bindCompleteItem = function (taskItem, deletclick) {
    let deleteB = taskItem.querySelector('.delete');
    deleteB.onclick = deletclick;
}
for(let data=0; data<todoul.children.length; data++){
    bindInCompleteItem(todoul.children [data], completedTask);

}
for(let data=0; data<completedList.children.length; data++){
    bindCompleteItem(completedList.children [data], deletePost);

}

form.addEventListener('submit', addPost);

