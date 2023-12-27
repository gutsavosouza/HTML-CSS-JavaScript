var confirmButton = document.getElementById("confirm");
var userInput = document.getElementById("input");
var ul = document.querySelector("ul");
var listItems  = document.getElementsByTagName("li");

liEvent();
listButton();
confirmButton.addEventListener("click", addElementAfterClick);
userInput.addEventListener("keypress", addElementAfterKey);

function userInputLength() {
    return userInput.value.length;
};
function createListElement() {
        var li = document.createElement("li");
        var button = document.createElement('button'); 
        button.classList.add('button')
        li.appendChild(document.createTextNode(userInput.value));
        ul.appendChild(li);
        li.appendChild(button);
        button.innerHTML = "delete";
        userInput.value = "";
        liEvent();
        listButton();
};
function addElementAfterClick() {
        if (userInputLength() > 0) {
            createListElement();
        };
};
function addElementAfterKey(key) {
        if (userInputLength() > 0 && key.keyCode === 13) {
            createListElement();
        };
};

function toggleClass() {
    this.classList.toggle("done");
};
// adding the event to each list item >>
function liEvent() {
    for(var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', toggleClass);
    };
};

function deleteListItem() {
    for(var i = 0; i < listItems.length; i++) {
        this.parentNode.remove();
    };
};
function listButton() {
    var button = document.querySelectorAll("li button");
    for(var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", deleteListItem);
    };
};
