
let leads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function() {
    leads.push(inputEl.value);
    clearIt(inputEl);
    console.log(leads);
    renderLeads();
})

function renderLeads() {
    let listItems = ``;
    leads.forEach(function (leadValue) {
        listItems += `
        <li>
            <a target="_blank" href=${leadValue}>
                ${leadValue}
            </a>
        </li>
        `;
    })
    ulEl.innerHTML = listItems;
}

function clearIt(target) {
    target.value = "";
}