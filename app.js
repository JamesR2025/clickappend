
const clickButton = document.getElementById("clickButton")
const clickList = document.getElementById("clickList")

function addList() {
    const newItem = document.createElement('li');
    newItem.textContent = 'click!';
    clickList.appendChild(newItem);
}

function resetList() {
    while (clickList.firstChild){
        clickList.removeChild(clickList.firstChild);
    }
}