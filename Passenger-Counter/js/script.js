let count = 0;

let countEl = document.getElementById("count-el");
let saveEl  = document.getElementById("save-el");

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    let newEntry = count + " - ";
    saveEl.textContent += newEntry;
    resetCounter();
}

function resetCounter() {
    count = 0;
    countEl.innerText = count;
}